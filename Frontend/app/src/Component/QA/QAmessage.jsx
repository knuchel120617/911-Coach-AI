import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { TextField } from "@mui/material";

const QAMessage = ({ message, isUser }) => {
  const [input, setInput] = useState(message);
  

  return (
    <div
      className={`flex items-start ${isUser ? "justify-end" : "justify-start"} my-2`}
    >
      {!isUser && <PersonIcon className="mr-2 text-gray-500" />}
      <div
        className={`flex w-full gap-14 mb-4 ${isUser ? "bg-gray-100" : "bg-green-100"} max-w-4xl`}
      >
        <TextField
          fullWidth
          multiline
          variant="outlined"
          value={message}
          
          className="rounded-lg"
          InputProps={{ className: "rounded-lg" }}
        />
      </div>
      {isUser && <PersonIcon className="ml-2 text-gray-500" />}
    </div>
  );
};

export default QAMessage;