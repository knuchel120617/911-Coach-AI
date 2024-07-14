# Medihacks Hackathon 2024 - AI Features

## About

This project offers three main features designed to assist with medical emergencies using AI:

1. **Q&A Feature:** Answers user questions based on a curated list of trusted articles and books related to medical emergencies, ingested in the vector database.
2. **Simulation:** Simulates a 911 call with the user based on real scenarios present in the vector database.
3. **Feedback:** Analyzes user conversations, comparing them with protocols and instructions from the vector database.

### Constructing the Vector Database (VDB)

- **Datasets:** We prepared two datasets:
  - The first contains scenarios and 911 calls with their protocols, extracted from guidelines.
  - The second contains articles from the web, including scraped PDF books.
- **Ingestion:** Both datasets, along with the PDF books, were ingested into the vector database.
- **Development:** We worked on endpoints and iterated through the prompts to refine the features.

## Endpoints

### Q&A

This endpoint answers the user's questions based on a knowledge base.

**URL:** `endpoint/qa`

**Input:** 
```json
{
  "question": "str"
}
```

**Output:**
```json
{
  "response": "response"
}
```

### Scenario

This endpoint retrieves information about a scenario to simulate based on the type of emergency.

**URL:** `endpoint/scenario`

**Input:** 
```json
{
  "emergency_type": "str"
}
```

**Output:**
```json
{
  "Scenario": "scenario",
  "Conversation": "conversation"
}
```

### Simulator

This endpoint takes the scenario, conversation, and chat history to return the AI's response.

**URL:** `endpoint/simulator`

**Input:** 
```json
{
  "chat_history": [
    {
      "author": "str",
      "comment": "str"
    }
  ],
  "scenario": "str",
  "conversation": "str"
}
```

**Output:**
```json
{
  "AI_response": "response"
}
```

### Feedback
This endpoint takes the chat history and the protocol that should be followed by the dispatcher and returns a feedback. c

**URL:** `endpoint/feedback`
**Input:** 
```json
{
  "chat_history": [
    {
      "author": "str",
      "comment": "str"
    }
  ],

  "protocol": "str"
}
```

**Output:**
```json
{
  "AI feedback": "response"
}
```


### MessageModel

The `MessageModel` class represents a message in the chat history.

```python
class MessageModel(BaseModel):
    author: str
    comment: str
```

## Challenges

During development, we faced some challenges:

- **Latency:** Since we used free trial keys, the latency was higher than desired. 
- **Model Quality:** Using better models like OpenAI would likely yield better responses and improve overall performance.
