from configparser import ConfigParser
import cohere
import os
from langchain_community.embeddings import CohereEmbeddings
from pinecone import Pinecone
from langchain_community.vectorstores import Pinecone as Pinecone_Langchain

# Read the secret keys from the configuration file
config = ConfigParser()
config.read("config.ini")
cohere_secret_key = config.get('Cohere', 'secret_key')
pinecone_secret_key = config.get('Pinecone', 'secret_key')
index_name = os.environ['PINECONE_INDEX_NAME'] = 'dispatch-ai'


def extract_document_info(responses):
    return [f"""Document: {response["metadata"]["text"]}. Reference: {response["metadata"]["Reference"]}. Link: {response["metadata"]["Link"]}""" for response in responses['matches'] if response["score"] > 0.2]

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
            prompt=f"""You are a AI-powered assistant that answer questions related to a medical emergency. You should provide a concise and accurate response to the Emergency medical dispatcher agent. Add references if needed, here's the question: {question}""",
            model='command-xlarge-nightly',
            max_tokens=800,
            temperature=0.2,
            stop_sequences=[],
            return_likelihoods='NONE'
        )
    else:
        response = co.generate(
            prompt=f"""You are a AI-powered assistant that answer questions related to a medical emergency. You should provide a concise and accurate response to the Emergency medical dispatcher agent based on these documents: {results}. Here's the question: {question}. Make sure to mention the references and the links below.""",
            model='command-xlarge-nightly',
            max_tokens=800,
            temperature=0.2,
            stop_sequences=[],
            return_likelihoods='NONE'
        )
    return response.generations[0].text