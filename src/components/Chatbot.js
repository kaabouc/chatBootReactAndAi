import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMicrophone, FaMicrophoneSlash, FaUser, FaRobot } from 'react-icons/fa';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [recognition, setRecognition] = useState(null);
  const [listening, setListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('fr-FR');

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition(); // For Chrome/Edge
    recognition.lang = selectedLanguage;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      setUserInput(transcript);
    };

    recognition.onend = () => {
      setListening(false);
    };

    setRecognition(recognition);
  }, [selectedLanguage]);

  const startListening = () => {
    if (recognition) {
      setListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
      setUserInput('');
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const speakResponse = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage;
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = async () => {
    if (userInput.trim() === '') {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8081/chatbot/reponse?question=${encodeURIComponent(userInput)}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.text();

      const updatedChatHistory = [
        ...chatHistory,
        { type: 'user', message: userInput },
        { type: 'bot', message: data },
      ];

      setChatHistory(updatedChatHistory);

      // Speak the response of the chatbot
      speakResponse(data);
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur:', error);
    }

    setUserInput('');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div
            className="chat-container"
            style={{
              backgroundColor: '#f0f0f0',
              padding: '15px',
              borderRadius: '8px',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
          >
            <div className="message-container">
              {chatHistory.map((entry, index) => (
                <div
                  key={index}
                  className={`message ${entry.type === 'user' ? 'alert alert-primary user-message' : 'alert alert-success bot-message'} mb-2 p-2`}
                >
                  {entry.type === 'user' ? (
                    <span className="message-icon"><FaUser /></span>
                  ) : (
                    <span className="message-icon"><FaRobot /></span>
                  )}
                  {entry.message}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="form-control mr-2"
                placeholder="Posez une question..."
              />
              <button onClick={handleSubmit} className="btn btn-primary">Envoyer</button>
              <button onClick={listening ? stopListening : startListening} className={`btn btn-secondary ml-2 ${listening ? 'active' : ''}`}>
                {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                {' '}
                {listening ? 'Arrêter la dictée vocale' : 'Démarrer la dictée vocale'}
              </button>
              <button onClick={stopListening} className="btn btn-danger ml-2">
                Arrêter et Effacer
              </button>
              <select className="form-control ml-2" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                <option value="fr-FR">French</option>
                <option value="en-US">English</option>
                <option value="es-ES">Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
