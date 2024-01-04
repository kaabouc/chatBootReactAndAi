import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMicrophone, FaMicrophoneSlash, FaUser, FaRobot } from 'react-icons/fa';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

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
    <div className="container-fluid bg-dark text-white" >
      <Navbar />
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <div className="card border-primary rounded-lg mb-3">
            <div className="card-header" style={{background:'rgb(52, 58, 64)'}}>
              <h1 className="display-4" style={{ paddingTop : '80px', color:'white', fontFamily :'normale' , textAlign:'center' }} > <b>Chatbot d'Assistance</b></h1>
            </div>
            <div className="card-body bg-dark text-white">
              <div className="message-container">
                {chatHistory.map((entry, index) => (
                  <div
                    key={index}
                    className={`message bg-dark text-white ${entry.type === "user" ? "bg-light border rounded-pill p-3 text-primary" : "bg-light border rounded-pill p-3 text-success"}`}
                  >
                    {entry.type === "user" ? (
                      <span className="message-icon"><FaUser /></span>
                    ) : (
                      <span className="message-icon"><FaRobot /></span>
                    )}
                    {entry.message}
                  </div>
                ))}
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  className="form-control bg-dark text-white"
                  placeholder="Posez une question..."
                />
                <button
                  onClick={handleSubmit}
                  className="btn btn-outline-primary"
                >
                  Envoyer
                </button>
                <button
                  onClick={listening ? stopListening : startListening}
                  className={`btn btn-outline-primary btn-sm ${listening ? "active" : ""}`}
                >
                  {listening ? <FaMicrophoneSlash /> : <FaMicrophone />}
                  {" "}
                  {listening ? "Arrêter la dictée vocale" : "Démarrer la dictée vocale"}
                </button>
                <button
                  onClick={stopListening}
                  className="btn btn-outline-danger btn-sm"
                >
                  Arrêter et Effacer
                </button>
                <select
                  className="form-control ml-2 bg-dark text-white"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="fr-FR">Français</option>
                  <option value="en-US">Anglais</option>
                  <option value="es-ES">Espagnol</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
  );
};

export default Chatbot;
