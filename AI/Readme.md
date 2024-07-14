# Medihacks Hackathon 2024 - AI

## About

TODO --> explain more about AI


## Endpoints

### Q&A
This endpoint is used to answer the user's questions based on a knowledge base.

**URL:** `endpoint/qa`

**Input:** 
- `question: str`

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
- `emergency_type: str`

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
```python
{
  "chat_history": List[MessageModel],
  "scenario": str,
  "conversation": str
}
```

**Output:**
```json
{
  "AI_response": "response"
}
```

### MessageModel
The `MessageModel` class represents a message in the chat history.

```python
class MessageModel(BaseModel):
    author: str
    comment: str
```
