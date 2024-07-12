from fastapi import FastAPI, HTTPException, BackgroundTasks
from utils import *
from pydantic import BaseModel


'''The API '''
# Create the FastAPI app
app = FastAPI()

# Models
class RequestModel(BaseModel):
    message: str 
    emergency_type: str
    scenario: str

class QuestionModel(BaseModel):
    question: str 

# Define the root route
@app.get("/")
async def root():
    """
    Welcome message for the root endpoint.
    """
    return {"message": "Welcome to the smart dispatch API!"}

# Question and Answer endpoint
@app.post("/qa")
async def qa(request: QuestionModel):
    message = request.question
    response = question_answer(message)
    return {"response": response}

# Scenario Endpoint
@app.post("/ingest")
async def qa(request: RequestModel):
    pass