import React, { useState, useEffect } from "react";
import QAMessage from "./QAmessage";
import GuidelineCard from "../Simulator/GuidelineCard";

import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import SparklesIcon from "@mui/icons-material/Stars";

const QA = () => {
  const [messages, setMessages] = useState([
    { text: "", isUser: true },
    { text: "", isUser: false },
  ]);
  const [input, setInput] = useState("");

    // Log messages on component mount (optional)
    useEffect(() => {
      console.log('Current messages:', messages);
    }, [messages]); // Dependency array ensures logging only occurs on message changes


  const handleSend = async () => {
    if (input.trim()) {
      const message = { question: input, isUser: true };

      setMessages([
        { text: input, isUser: true } // empty the array and start a new one
      ]);
      // Clear input field after sending
      setInput('');

      
  
      try {
        // Replace with your actual URL endpoint
        const response = await fetch('https://em-buddy.onrender.com/qa', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(message),
        });

  
        if (response.ok) {
          const data = await response.json();
          const responseMessage = data.response;
          console.log('responseMessage', responseMessage);
          console.log('Message sent successfully!');
          setInput(""); // Clear input field even on successful send
          setMessages(prevMessages => [
            ...prevMessages,
            { text: data.response, isUser: false }
          ]);

          console.log('responseMessage:', data.response);
        } else {
          console.error('Error sending message:', response.statusText);
          // Handle error (e.g., display an error message to the user)
        }
      } catch (error) {
        console.error('Error sending message:', error);
        // Handle error (e.g., display an error message to the user)
      }
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
     
      <GuidelineCard
        guidelines="Utilize our Q&A functionality to ask medical questions sourced from our AI-powered database. All responses are derived from current protocols and industry best practices, with additional links provided for further reference."
        className="mb-4 shadow-lg"
      />

      <div className="mb-4 w-full max-w-4xl">
        {messages.map((message, index) => (
          <QAMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>


      <div className="flex w-full max-w-4xl mb-4">
        <TextField
          fullWidth
          variant="outlined"
          label="Ask a question from our evidence-based knowledge base Q&A"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-lg shadow-md"
          InputProps={{ className: "rounded-lg" }}
          style={{ marginRight: "10px" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          className="py-2 px-4 shadow-md"
          style={{
            marginLeft: "30px",
            padding: "5px 80px", // Adjusted padding for the button size
            fontSize: "14px", // Adjusted font size if needed
            borderRadius: "9999px", // Ensures the button is fully rounded
          }}
        >
          ASK
        </Button>
      </div>
    </div>
  );
};

export default QA;
