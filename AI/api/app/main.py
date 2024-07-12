from fastapi import FastAPI, HTTPException, BackgroundTasks
from utils import *
from pydantic import BaseModel


'''The API '''
# Create the FastAPI app
app = FastAPI()

# Models
class ScenarioModel(BaseModel):
    emergency_type: str

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

# Get scenario Endpoint
@app.post("/scenario")
async def scenario(request: ScenarioModel):
    emergency_type = request.emergency_type
    response = get_scenario(emergency_type)
    return response