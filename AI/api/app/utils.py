from configparser import ConfigParser
import cohere
import os
import re
from ai21 import AI21Client
from ai21.models import RoleType
from ai21.models import ChatMessage
from langchain_community.embeddings import CohereEmbeddings
from pinecone import Pinecone
from langchain_community.vectorstores import Pinecone as Pinecone_Langchain

# Read the secret keys from the configuration file
config = ConfigParser()
config.read("config.ini")
cohere_secret_key = config.get('Cohere', 'secret_key')
pinecone_secret_key = config.get('Pinecone', 'secret_key')
ai21_secret_key = config.get('AI21', 'secret_key')
index_name = os.environ['PINECONE_INDEX_NAME'] = 'dispatch-ai'


def extract_document_info(responses):
    return [f"""Document: {response["metadata"]["text"]}. Reference: {response["metadata"]["Reference"]}. Link: {response["metadata"]["Link"]}""" for response in responses['matches'] if response["score"] > 0.2]

def format_scenario(scenario_data):
    scenario_pattern = r"Scenario:\s*(.*?)\n"
    protocol_pattern = r"Protocol:\s*(.*?)\s+conversation:"
    conversation_pattern = r"conversation:\s*(.*)"

    text = scenario_data["metadata"]["text"]

    scenario_match = re.search(scenario_pattern, text, re.DOTALL)
    scenario = scenario_match.group(1).strip() if scenario_match else None

    protocol_match = re.search(protocol_pattern, text, re.DOTALL)
    protocol_steps = protocol_match.group(1).strip() if protocol_match else None

    conversation_match = re.search(conversation_pattern, text, re.DOTALL)
    conversation = conversation_match.group(1).strip() if conversation_match else None

    return {
        "Scenario": scenario,
        "Conversation": conversation,
        "Protocol": protocol_steps,
        "Reference": scenario_data["metadata"]["Reference"],
        "Link": scenario_data["metadata"]["Link"]
    }

def question_answer(question):
    co = cohere.Client(cohere_secret_key)
    embeddings = CohereEmbeddings(cohere_api_key=cohere_secret_key, user_agent="dispatch-ai")
    query = embeddings.embed_query(question)
    pc = Pinecone(api_key=pinecone_secret_key)
    index = pc.Index(index_name)
    results = index.query(
        vector=query,
        top_k=3,
        include_metadata=True
    )
    results = extract_document_info(results)
    if len(results) == 0:
        response = co.generate(
            prompt=f"""You are a AI-powered assistant that answer questions related to a medical emergency: {emergency_type}. You should provide a concise and accurate response to the Emergency medical dispatcher agent. Add references if needed, here's the question: {question}""",
            model='command-xlarge-nightly',
            max_tokens=800,
            temperature=0.2,
            stop_sequences=[],
            return_likelihoods='NONE'
        )
    else:
        response = co.generate(
            prompt=f"""You are a AI-powered assistant that answer questions related to a medical emergency: {emergency_type}. You should provide a concise and accurate response to the Emergency medical dispatcher agent based on these documents: {results}. Here's the question: {question}. Make sure to mention the references and the links below.""",
            model='command-xlarge-nightly',
            max_tokens=800,
            temperature=0.2,
            stop_sequences=[],
            return_likelihoods='NONE'
        )
    return response.generations[0].text

def get_scenario(emergency_type):
    embeddings = CohereEmbeddings(cohere_api_key=cohere_secret_key, user_agent="dispatch-ai")
    vector = embeddings.embed_query(emergency_type)
    pc = Pinecone(api_key=pinecone_secret_key)
    index = pc.Index(index_name)
    results = index.query(
        vector=vector,
        top_k=2,
        include_metadata=True,
        metadata={'Emergency Type': emergency_type, 'Type': 'Scenario'}
    )
    return format_scenario(results['matches'][0])

def simulate_chat(chat_history, scenario, conversation):
    client = AI21Client(api_key= ai21_secret_key)
    system = f"You are a person in a dying need for help and you are calling a dispatcher for a medical emergency. You are in this scenario: {scenario}. Respond to one question at a time. You should respond like this: {conversation}"
    conversation = []

    for msg in chat_history:
        print(msg)
        author = msg.author
        comment = msg.comment
        if author == "ai":
            conversation.append(ChatMessage(text=f"The dispatcher is saying: {comment}", role=RoleType.ASSISTANT))
        else:
            conversation.append(ChatMessage(text=f"{comment}", role=RoleType.USER))

    response = client.chat.create(
        system=system,
        messages=conversation,
        model="j2-ultra",
    )
    return response.outputs[0].text

def feedback(conversation, chat_history):
    pass
