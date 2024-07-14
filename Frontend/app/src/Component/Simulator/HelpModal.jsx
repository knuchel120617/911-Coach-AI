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
          width: { xs: "80%", sm: "400px" },
          backgroundColor: "#F8F9FF",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
        <div style={{
        backgroundColor: '#F8F9FF', 
        zIndex: 1000,
        width: '100%',
        position: 'sticky', top: 0 // Ensure it stays on top
      }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
            }}
          >
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", marginBottom: 2, paddingBottom: 2}}>
            <h1 className="text-2xl font-bold"
              sx={{ fontWeight: "bold", marginTop: 2, color: "#333333" }}
            >
              Q&A
            </h1>
          </Box>
          </div>
          {/* Display messages where isUser=true */}
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: msg.isUser ? '#E4ECEA' : "#FFF",
                borderRadius: 2,
                padding: 2,
                marginBottom: 2,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                wordBreak: 'break-word'
              }}
            >
              <Typography variant='body2' style={{ fontFamily: 'Poppins, sans-serif' }}>
                {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{ alignItems: "center", marginTop: 2, position: 'sticky', zIndex: 1000, bottom: 0, paddingBottom: 2 }}
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
              fontFamily: 'Poppins, sans-serif'
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
              backgroundColor: "#009379",
              "&:hover": {
                backgroundColor: "#009379",
              },
              padding: "12.5px 10px",
              fontFamily: 'Poppins, sans-serif'
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
