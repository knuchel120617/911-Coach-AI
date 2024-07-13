import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuNavBar from "../Menu/MenuNavBar";
import { Typography, Box } from "@mui/material";

// Component to display item details
const Conversation = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start">
    <Typography variant="h5" component="h1" className="mt-8 mb-4">
          Conversation Transcript
        </Typography>
        {item && (
          <div className="border border-gray-300 p-4 rounded-md shadow-md">
            <Typography variant="h6" component="h2" className="mb-2">
              {item.title} {item.date}
            </Typography>
            
        
        {item.transcript.map((entry, index) => (
          <div key={index} className={`mb-2 ${entry.author === "ai" ? "caller-bg" : "dispatcher-bg"}`}>
            <div
          key={index}
          className={`mb-2 p-2 rounded-lg ${
            entry.author === "ai" ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <Typography variant="body2" className="font-bold">
            {entry.author === "ai" ? "Caller" : "Dispatcher"}: {entry.comment}
          </Typography>
        </div>

          </div>
        ))}

            </div>
        )}
       
    </main>
    </div>
  );
}

export default Conversation;
