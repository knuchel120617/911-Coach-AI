import React, { useState } from "react";
import ChatMessage from "../Simulator/ChatMessage";
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
    { text: "I am very sick......", isUser: false },
    { text: "I am very sick......", isUser: true },
  ]);
  const [input, setInput] = useState("");
  const [scenario, setScenario] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <FormControl fullWidth variant="outlined" className="mb-4 max-w-2xl">
        <InputLabel>Scenario definition</InputLabel>
        <Select
          value={scenario}
          onChange={(e) => setScenario(e.target.value)}
          label="Scenario definition"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="scenario1">Scenario 1</MenuItem>
          <MenuItem value="scenario2">Scenario 2</MenuItem>
          <MenuItem value="scenario3">Scenario 3</MenuItem>
        </Select>
      </FormControl>

      <GuidelineCard
        guidelines="Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries."
        className="mb-4 shadow-lg"
      />

      <div className="mb-4 w-full max-w-4xl">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>

      <div className="flex items-center mb-4">
        <SparklesIcon className="mr-2 text-green-500" />
        <p className="text-center">End call and generate feedback</p>
      </div>

      <div className="flex w-full max-w-4xl mb-4">
        <TextField
          fullWidth
          variant="outlined"
          label="Send an instruction, question to the caller"
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
