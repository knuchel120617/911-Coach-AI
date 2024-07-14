import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuNavBar from "../Menu/MenuNavBar";
import { Typography, Box } from "@mui/material";

// Component to display item details
const Conversation = () => {
  const location = useLocation();
  const { item } = location.state || {};

  console.log('this is the item I have', item);

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F8F9FF]">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start p-4">
    <h1 className="mt-8 mb-4 text-center text-xl font-bold" style={{ color: '#333333' }}>
          Conversation Transcript
        </h1>
        {item && (
          <div className="border border-gray-300 p-4 rounded-md shadow-md">
            <h6 className="mb-2 font-bold" style={{color: '#333333'}}>
              {item.title} | {item.date}
            </h6>
            
        
        {item.transcript.map((entry, index) => (
          <div key={index} className={`mb-2 ${entry.author === "ai" ? "caller-bg" : "dispatcher-bg"}`}>
            <div
          key={index}
          className={`mb-2 p-2 rounded-lg ${
            entry.author === "ai" ? "bg-[#E4ECEA]" : "bg-gray-100"
          }`}
        >
          <p>
            {entry.author === "ai" ? "Caller" : "Dispatcher"}: {entry.comment}
          </p>
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
