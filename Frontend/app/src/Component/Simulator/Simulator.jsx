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
  IconButton,
  Modal,
} from "@mui/material";
import SparklesIcon from "@mui/icons-material/Stars";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CloseIcon from "@mui/icons-material/Close";

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

      console.log("Updated messages after user input:", updatedMessages);

      try {
        const response = await axios.post(
          "https://em-buddy.onrender.com/simulation",
          {
            chat_history: updatedMessages,
            scenario: scenarioDescription,
            conversation: conversation,
          }
        );

        console.log("Simulation response:", response.data);

        // Handle AI response and add it to chat history
        if (response.data && response.data["AI response"]) {
          const aiResponse = response.data["AI response"];
          const aiMessage = { author: "ai", comment: aiResponse };
          const updatedMessagesWithAI = [...updatedMessages, aiMessage];
          setMessages(updatedMessagesWithAI);

          console.log("Updated messages after AI response:", updatedMessagesWithAI);
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
        <InputLabel>Scenario definition</InputLabel>
        <Select
          value={scenario}
          onChange={(e) => handleScenarioSelect(e.target.value)}
          label="Scenario definition"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Cardiac Arrest">Cardiac Arrest</MenuItem>
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
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={message.author === "ai" ? "flex-start" : "flex-end"}
            mb={2}
          >
            <Paper
              elevation={3}
              style={{
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: message.author === "ai" ? "#e0f7fa" : "#bbdefb",
              }}
            >
              <Typography
                style={{ color: message.author === "ai" ? "#00796b" : "#0d47a1" }}
              >
                {message.comment}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Box display="flex" alignItems="center" mb={4}>
        <SparklesIcon className="mr-2 text-green-500" />
        <Typography variant="h6" className="text-center">
          End call and generate feedback
        </Typography>
      </Box>

      <Box display="flex" width="100%" maxWidth="4xl" mb={4}>
        <TextField
          fullWidth
          variant="outlined"
          label="Send an instruction, question to the caller"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          style={{
            marginLeft: "10px",
            padding: "10px 30px",
            fontSize: "14px",
            borderRadius: "50px",
          }}
        >
          Submit
        </Button>

        <IconButton
          color="primary"
          onClick={handleHelpClick}
          style={{ marginLeft: "10px" }}
        >
          <QuestionMarkIcon style={{ fontSize: "30px" }} />
        </IconButton>
      </Box>

      <Modal open={helpModalOpen} onClose={handleHelpClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={400}
          bgcolor="background.paper"
          p={4}
          borderRadius="8px"
          boxShadow={24}
        >
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6">Help</Typography>
            <IconButton onClick={handleHelpClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography>
            This is a help modal. Here you can provide information to assist users.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default Simulator;
