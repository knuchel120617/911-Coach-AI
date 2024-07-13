import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import GuidelineCard from "./GuidelineCard";
import HelpModal from "./HelpModal";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import SparklesIcon from "@mui/icons-material/Stars";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Simulator = () => {
  const [messages, setMessages] = useState([
    { text: "I am very sick......", isUser: false },
    { text: "I am very sick......", isUser: true },
  ]);
  const [input, setInput] = useState("");
  const [scenario, setScenario] = useState("");
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
    }
  };

  const handleHelpClick = () => {
    setHelpModalOpen(true);
  };

  const handleHelpClose = () => {
    setHelpModalOpen(false);
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
          <MenuItem value="scenario1">Cardiac Arrest</MenuItem>
          <MenuItem value="scenario2">Choking</MenuItem>
          <MenuItem value="scenario3">Drowning</MenuItem>
          <MenuItem value="scenario4">Electrocution</MenuItem>
          <MenuItem value="scenario5">Pregnancy</MenuItem>
          <MenuItem value="scenario6">Unconscious</MenuItem>
          <MenuItem value="scenario7">Bleeding</MenuItem>
          <MenuItem value="scenario8">Injury</MenuItem>
          <MenuItem value="scenario9">Headache</MenuItem>
          <MenuItem value="scenario10">Health Care Provider Requests EMS</MenuItem>
          <MenuItem value="scenario11">Home Medical Equipment Failure</MenuItem>
          <MenuItem value="scenario12">Childbirth</MenuItem>
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
          Submit
        </Button>

        <div className="flex items-center ml-[130px]">
          <QuestionMarkIcon
            style={{
              fontSize: "30px", // Reduced size to fit better
              color: "#3f51b5", // Matched button color
              cursor: "pointer",
            }}
            onClick={handleHelpClick}
          />
        </div>
      </div>

      <HelpModal open={helpModalOpen} handleClose={handleHelpClose} />
    </div>
  );
};

export default Simulator;
