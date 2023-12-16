// Chat.js

import React, { useState, useRef, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Chat.css'; // Assurez-vous d'importer votre fichier CSS ici
import { useTranslation } from 'react-i18next';

const API_KEY = "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";

const systemMessage = { role: "system", content: "Explain things like you're talking to a software professional with 2 years of experience." };

const Chat = () => {
  const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm chatbot! Ask me anything!",
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
  const handleTranslate = async (e, message) => {
    const targetLanguage = e.target.value;
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: message.message,
          targetLanguage,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const translatedText = await response.json();
  
      // Handle the translated text as needed (display, store, etc.)
      console.log(`Translated to ${targetLanguage}:`, translatedText);
    } catch (error) {
      console.error('Error translating message:', error);
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

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setMessages(translateMessages(messages));
  };

  const translateMessages = (messages) => {
    return messages.map((message) => ({
      ...message,
      message: t(message.message),
    }));
  };

  return (
    <Container className="chat-container  wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <Row>
        <Col md={10} className="mx-auto">
          <div className="language-selector">
            <Button onClick={() => handleLanguageChange('en')}>EN</Button>
            <Button onClick={() => handleLanguageChange('fr')}>FR</Button>
            <Button onClick={() => handleLanguageChange('es')}>ES</Button>
            <Button onClick={() => handleLanguageChange('ar')}>AR</Button>
            {/* Ajoutez d'autres boutons pour chaque langue */}
          </div>
          <div className="message-container">
          <div className="message-list">
  {messages.map((message, i) => (
    <div key={i} className={`message ${message.direction}`}>
      <div className="message-text">
        {message.message}
      </div>
      {message.direction === 'incoming' && (
        <div className="translation-selector">
          <span>Translate to:</span>
          <select onChange={(e) => handleTranslate(e, message)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more language options as needed */}
          </select>
        </div>
      )}
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
              <Form.Control type="text" name="message" placeholder={t('typeMessage')} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('send')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
