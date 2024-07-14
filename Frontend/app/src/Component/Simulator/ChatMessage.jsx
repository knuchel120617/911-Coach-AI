import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";

const ChatMessage = ({ message, isUser }) => {
  const [input, setInput] = useState(message);

  return (
    <div
      className={`flex items-center ${isUser ? "justify-end" : "justify-start"} my-2`}
    >
      {!isUser && <PersonIcon className="mr-2 text-[#009379]" />}
      <div
        className={`p-4 rounded-lg ml-2 text-md shadow-md flex w-full gap-14 mb-4 ${isUser ? "bg-[#E4ECEA]" : "bg-[#FFF]"} max-w-4xl`}
      >
        <p
          fullWidth
        >
          {input}
          </p>
      </div>
      {isUser && <PersonIcon className="ml-2 text-[#333333]" />}
    </div>
  );
};

export default ChatMessage;
