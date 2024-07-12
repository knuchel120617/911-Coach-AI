import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuNavBar from "../Menu/MenuNavBar";
import { Typography } from "@mui/material";

// Component to display item details
const Conversation = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <MenuNavBar />
    <main className="flex flex-col items-start justify-start">
    <Typography variant="h5" component="h1" className="mt-8 mb-4">
          My Conversation Details
        </Typography>
        {item && (
          <div className="border border-gray-300 p-4 rounded-md shadow-md">
            <Typography variant="h6" component="h2" className="mb-2">
              Title: {item.title}
            </Typography>
            <Typography variant="body1" className="mb-2">
              Date: {item.date}
            </Typography>
            </div>
        )}
       
    </main>
    </div>
  );
}

export default Conversation;
