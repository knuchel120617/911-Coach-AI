import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  Paper,
  IconButton
} from "@mui/material";
import SparklesIcon from "@mui/icons-material/Stars";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";
import Buttons from "../Button/Buttons";
import HelpModal from "./HelpModal"

import GuidelineCard from "./GuidelineCard";

const Simulator = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [scenario, setScenario] = useState("");
  const [scenarioDescription, setScenarioDescription] = useState("");
  const [conversation, setConversation] = useState("");
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const fetchScenarioDetails = async (selectedScenario) => {
    try {
      const response = await axios.post(
        "https://em-buddy.onrender.com/scenario/",
        {
          emergency_type: selectedScenario,
        }
      );
      setScenarioDescription(response.data.Scenario);
      setConversation(response.data.Conversation);
      setMessages([]); // Clear messages when scenario changes
    } catch (error) {
      console.error("Error fetching scenario details:", error);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { author: "user", comment: input };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput("");

      try {
        const response = await axios.post(
          "https://em-buddy.onrender.com/simulation",
          {
            chat_history: updatedMessages,
            scenario: scenarioDescription,
            conversation: conversation,
          }
        );

        if (response.data && response.data["AI response"]) {
          const aiResponse = response.data["AI response"];
          const aiMessage = { author: "ai", comment: aiResponse };
          const updatedMessagesWithAI = [...updatedMessages, aiMessage];
          setMessages(updatedMessagesWithAI);
        } else {
          console.error("AI response is missing or not formatted correctly");
        }
      } catch (error) {
        console.error("Error fetching AI response:", error);
        if (error.response) {
          console.error("Server error details:", error.response.data);
        }
      }
    }
  };

  const accessToken = localStorage.getItem('token');

  const endCall = async () => {
    console.log('clicked button to end convo');
      try {
        const response = await axios.post(
          "https://medihacks-ka2dwt1hz-marikas-projects-22112c00.vercel.app/conversations",
          //"http://localhost:3000/conversations",
          {
	        userId: localStorage.getItem('userId'),
	        type: "simulation",
	        category: scenario,
          transcript: messages
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Include access token in Authorization header
            },
          }
        );

        // Handle successful response
    setScenario(""); // Reset scenario state to empty string
    setMessages([]); // Reset messages state to an empty array

      }  catch (error) {
        console.error("Error saving conversation to database:", error);
      }
    };

  const handleHelpClick = () => {
    setHelpModalOpen(true);
  };

  const handleHelpClose = () => {
    setHelpModalOpen(false);
  };

  const handleScenarioSelect = (selectedScenario) => {
    setScenario(selectedScenario);
    fetchScenarioDetails(selectedScenario); // Fetch scenario details when scenario changes
  };

  return (
    <Box className="p-6 flex flex-col items-center">
      <FormControl fullWidth variant="outlined" className="mb-4 max-w-2xl">
        <InputLabel
          sx={{
            fontFamily: 'Poppins, sans-serif', // Custom font
            color: '#333333', // Custom text color
            borderRadius: '8px', // Custom border radius
            padding: '0 8px' // Optional: Adjust padding to match border radius
          }}
          className="text-sm"
        >
          Scenario definition
        </InputLabel>
        <Select
          value={scenario}
          onChange={(e) => handleScenarioSelect(e.target.value)}
          label="Scenario definition"
        >
          <MenuItem value="Cardiac Arrest" selected>Cardiac Arrest</MenuItem>
          <MenuItem value="Choking">Choking</MenuItem>
          <MenuItem value="Drowning">Drowning</MenuItem>
          <MenuItem value="Electrocution">Electrocution</MenuItem>
          <MenuItem value="Pregnancy">Pregnancy</MenuItem>
          <MenuItem value="Unconscious">Unconscious</MenuItem>
          <MenuItem value="Bleeding">Bleeding</MenuItem>
          <MenuItem value="Injury">Injury</MenuItem>
          <MenuItem value="Headache">Headache</MenuItem>
          <MenuItem value="Health Care Provider Requests EMS">
            Health Care Provider Requests EMS
          </MenuItem>
          <MenuItem value="Home Medical Equipment Failure">
            Home Medical Equipment Failure
          </MenuItem>
          <MenuItem value="Childbirth">Childbirth</MenuItem>
          {/* Add other scenario options */}
        </Select>
      </FormControl>

      <Box className="mb-4 w-full max-w-4xl">
        <GuidelineCard
          guidelines="This is a simulation, but it reflects a real-world scenario. Provide immediate instructions for basic first aid if necessary. Once you finish dealing with the situation, click on end call to get a feedback. Start the conversation when you are ready!"
          className="mb-4"
        />

        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex full-width"
            justifyContent={message.author === "ai" ? "flex-start" : "flex-end"}
            className={`${message.author === "ai" ? "bg-[#8fcfc4]" : "bg-[#ffffff]"} p-4 rounded-lg ml-2 text-md flex w-full gap-14 mb-4 max-w-4xl`}
            mb={2}
          >
              <p
                style={{
                  color: "#333333",
                  fontFamily: 'Poppins, sans-serif', // Custom font
                }}
                className={`flex w-full gap-5 mb-4 max-w-4xl`}
              >
                {message.comment}
              </p>
          </Box>
        ))}
      </Box>

      <div
        style={{
          backgroundColor: "#F8F9FF",
          position: "sticky",
          bottom: 0,
          width: "100%",
          zIndex: 1000, // Ensure it stays on top
        }}
        className="w-full flex flex-col"
      >
        <div className="flex flex-row justify-center items-center mb-4">
        <IconButton onClick={() => endCall()}>
          <SparklesIcon className="flex justify-center items-center mr-3 text-[#009379]" />
          <p className="text-center">End call and generate feedback</p>
          </IconButton>
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
    </Box>
  );
};

export default Simulator;
