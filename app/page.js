"use client";

import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: userInput },
        { type: "bot", text: "Thank you for your message!" },
      ]);
      setUserInput("");
    }
  };

  return (
    <div>
      {/* Toggle Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
      >
        {isOpen ? "Close Chat" : "Chat with us"}
      </Button>

      {/* Chat Overlay */}
      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 300,
            height: 400,
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              bgcolor: "#3f51b5",
              color: "white",
              p: 2,
              textAlign: "center",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            Chat with us!
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf: message.type === "user" ? "flex-end" : "flex-start",
                  bgcolor:
                    message.type === "user" ? "#e3f2fd" : "#f5f5f5",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                }}
              >
                {message.text}
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderTop: "1px solid #ddd",
            }}
          >
            <TextField
              fullWidth
              size="small"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <Button
              variant="contained"
              color="primary"
              onClick={sendMessage}
              sx={{ ml: 1 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Chatbot;
