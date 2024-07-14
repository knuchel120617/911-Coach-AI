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
import Buttons from "../Button/Buttons";

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
      <InputLabel
        sx={{
          fontFamily: 'Poppins, sans-serif', // Custom font
          color: '#333333', // Custom text color
          borderRadius: '8px', // Custom border radius
          padding: '0 8px' // Optional: Adjust padding to match border radius
        }}
        
        className = "text-sm"
      >
        Scenario definition
      </InputLabel>
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
        className="mb-4"
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
      <div style={{
        backgroundColor: '#F8F9FF', 
        position: 'sticky',
        bottom: 0,
        width: '100%',
        zIndex: 1000, // Ensure it stays on top
      }} className="w-full flex flex-col">
        <div className="flex flex-row justify-center items-center mb-4">
          <SparklesIcon className="flex justify-center items-center mr-3 text-[#009379]" />
          <p className="text-center">End call and generate feedback</p>
        </div>
        <div className="flex justify-center items-center flex-row w-full mb-4">
        <TextField
          fullWidth
          variant="outlined"
          label="Send an instruction or a question to the caller"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex rounded-lg"
          InputProps={{ className: "rounded-lg" }}
        />

        <Buttons
          onClick={handleSend}
          primary
          type="submit"
          className="text-white bg-[#009379] px-10 py-5 border-none rounded-[10px] text-sm" 
          style={{ minWidth: "auto", width: "auto", marginLeft: "10px" }}
        >
          Send
        </Buttons>


        <div className="flex items-center ml-[130px]">
          <QuestionMarkIcon
            style={{
              fontSize: "30px", // Reduced size to fit better
              color: "#009379", // Matched button color
              cursor: "pointer",
            }}
            onClick={handleHelpClick}
          />
        </div>
      </div>
      
      <HelpModal open={helpModalOpen} handleClose={handleHelpClose} />
    </div>
      </div>


  );
};

export default Simulator;
