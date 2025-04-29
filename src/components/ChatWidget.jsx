import React, { useState } from "react";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, { text: input, sender: "User" }]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      <h3>Live Support Chat</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>{msg.text}</p>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Type a message..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatWidget;
