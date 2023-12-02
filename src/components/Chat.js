// src/components/Chat.js
import React, { useState, useRef, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user', timestamp: new Date() }]);
    setNewMessage('');
    // You can add logic here to send the message to your backend or chatbot service
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ height: '400px', overflowY: 'auto' }}>
        <div className="card-body">
          {messages.map((message, index) => (
            <div key={index} className={`text-${message.sender === 'user' ? 'right' : 'left'}`}>
              <p>{message.text}</p>
              <small>{message.sender === 'user' ? 'You' : 'Bot'} - {message.timestamp.toLocaleTimeString()}</small>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </div>

      <div className="mt-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
