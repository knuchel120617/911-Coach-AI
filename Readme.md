<!--<p align="center">
  <a href="" rel="noopener">
 <img src="./assets/12345.png"></a>
</p>-->
<h3 align="center">911 Coach AI</h3>

<div align="center">

</div>

---

<p align="center"> This project is our solution to the Emergency Dispatch Conversation AI - challenge at MediHacks 2024 - Hackathon (https://www.medihacks.org/).

</p>

## 📝 Table of Contents
- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Prototype](#prototype)
- [Setting up a local environment](#getting_started)
- [Technology Stack](#tech_stack)
- [Authors](#authors)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Emergency dispatchers often face training that is out of date, along with outdated guidebooks and manuals. They lack access to modern technology in their daily work. This gap highlighted the need for designing and prototyping a conversational AI that can simulate various life-threatening scenarios, helping dispatchers to rehearse and improve their response skills.


## 💡 Idea / Solution <a name = "idea"></a>

Our solution is a web application aimed at emergency medical dispatchers. Our users are able to create an account
and log in to the application, where they can simulate different medical emergency scenarios. They are able to have
chat-based conversations with AI, who is acting as a caller to emergency services. Additionally, users have access
to Q&A functionality, where they can get evidence-based information about different medical emergencies. 
They have access to the Q&A functionality also during the simulations.

We will soon integrate a feedback function that will provide users with insights about their performance based on protocols and EMD conversations that were retrieved from medical books. The endpoint is already functional and gives good results.

It's important to note that the core of our solution is our vector database which contains a curated list of scenarios along with protocols to follow, books, and article. More information about the AI features can be found [here](https://github.com/adimidania/911-Coach-AI/tree/main/AI).

Check the [Figma prototype](https://www.figma.com/design/qIqalwlEH6M2GBUdpbUeUz/Landing-Page-UI-Kit---Fully-customizable-landing-page-UI-kit---Export-as-HTML-(Community)?node-id=0-1&t=hhnQ36NwNKehzHsu-1) to learn more about 911 Coach AI.
## ⛓️ Prototype <a name = "prototype"></a>

Our application consists of a React frontend, that has been secured with Firebase authentication and
a NodeJS backend that interacts with the MongoDB database. User information and their simulation data 
are saved in the database. The AI element of the application has been built by utilizing Fast API,
Pinecone vector database and Cohere LLM. The below diagram gives an overview of the architecture that has
been implemented:

![architecture](assets/Medihacks.png)

More details about the AI features can be found [here](https://github.com/adimidania/911-Coach-AI/tree/main/AI).


## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development 
and testing purposes. 

### Prerequisites



### Installing

Below instructions can be used to run either the frontend or backend application locally. For backend application,
navigate to folder ./Backend and for frontend application, navigate to folder ./Frontend/app

Install project dependencies:

```
npm install
```

To run this project locally run:

```
npm run dev
```

This command will build the project and start a local development server. You'll see messages indicating that the project is being compiled and the server is running.

Access the Application: Open a web browser and navigate to http://localhost:3000 to access the backend application and to
http://localhost:5173 to access the frontend application.


## ⛏️ Built With <a name = "tech_stack"></a>
- [React](https://www.react.dev/) - Frontend Framework
- [NodeJS](https://nodejs.org/) - JavaScript runtime environment
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [FastAPI](https://fastapi.tiangolo.com/) - A modern, fast (high-performance), web framework for building APIs
- [Pinecone](www.pinecone.io) - Vector database
- [Cohere](https://cohere.com) - Enterprise AI Platform

## ✍️ Authors <a name = "authors"></a>
- [@MeriemTerki](https://github.com/MeriemTerki) - AI, integrating AI to frontend app
- [@adimidania](https://github.com/adimidania)   - AI, Figma design, frontend
- [@Mahiambaw](https://github.com/Mahiambaw)     - Frontend
- [@mariberg](https://github.com/mariberg)       - Backend, frontend, integrating AI to frontend app
