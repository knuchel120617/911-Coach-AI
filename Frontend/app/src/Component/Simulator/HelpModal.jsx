import React, { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const HelpModal = ({ open, handleClose }) => {
  const [messages, setMessages] = useState([
    { text: "", isUser: true },
    { text: "", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleClick = async () => {
    if (input.trim()) {
      const message = { question: input, isUser: true };

      setMessages([{ text: input, isUser: true }]);
      setInput(""); // Clear input field after sending

      try {
        const response = await fetch("https://em-buddy.onrender.com/qa", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        });

        if (response.ok) {
          const data = await response.json();
          const responseMessage = data.response;
          console.log("responseMessage", responseMessage);

          setMessages((prevMessages) => [
            ...prevMessages,
            { text: responseMessage, isUser: false },
          ]);
        } else {
          console.error("Error sending message:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box
        sx={{
          width: { xs: "80%", sm: "300px" },
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Help</Typography>
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "bold", marginTop: 2 }}
            >
              Q&A
            </Typography>
          </Box>
          {/* Display messages where isUser=true */}
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: msg.isUser ? "#f7f7f7" : "#e0f7fa",
                borderRadius: 2,
                padding: 2,
                marginBottom: 2,
                minHeight: "100px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant={msg.isUser ? "body1" : "body2"}>
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: "center", marginTop: 2 }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Ask me anything"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              borderRadius: 2,
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            InputProps={{
              className: "rounded-lg",
            }}
          />
          <Button
            variant="contained"
            onClick={handleClick}
            fullWidth
            sx={{
              borderRadius: 2,
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Ask
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default HelpModal;
