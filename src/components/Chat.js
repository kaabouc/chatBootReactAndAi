// Chat.js
import React, { useState, useRef, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Chat.css'; // Assurez-vous d'importer votre fichier CSS ici

const API_KEY = "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";

const systemMessage = { role: "system", content: "Explain things like you're talking to a software professional with 2 years of experience." };

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm chatbot ! Ask me anything!",
      direction: 'incoming',
      sender: "ChatBot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    try {
      const apiMessages = chatMessages.map((messageObject) => ({
        role: messageObject.sender === "ChatGPT" ? "assistant" : "user",
        content: messageObject.message,
      }));

      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [systemMessage, ...apiMessages],
      };

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const newMessage = { message: data.choices[0].message.content, sender: "ChatGPT", direction: 'incoming' };
      setMessages([...chatMessages, newMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsTyping(false);
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const playSound = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Container className="chat-container">
      <Row>
        <Col md={10} className="mx-auto">
          <div className="message-container">
            <div className="message-list">
              {messages.map((message, i) => (
                <div key={i} className={`message ${message.direction}`}>
                  {message.message}
                  <span className="sound-icon" onClick={() => playSound(message.message)}>
                    🔊
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
          </div>
          <Form onSubmit={(e) => { e.preventDefault(); handleSendMessage(e.target.message.value); }}>
            <Form.Group controlId="messageForm">
              <Form.Control type="text" name="message" placeholder="Type message here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;