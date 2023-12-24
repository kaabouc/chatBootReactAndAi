import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const askQuestion = async () => {
    if (userInput.trim() === '') {
      return;
    }

    // Ajouter la question de l'utilisateur à l'historique du chat
    setChatHistory([...chatHistory, { type: 'user', message: userInput }]);

    try {
      // Envoyer la question au serveur en utilisant la méthode GET
      const response = await fetch(`http://localhost:8081/chatbot/reponse?question=${encodeURIComponent(userInput)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Utiliser response.text() pour récupérer le texte brut
      const data = await response.text();

      // Ajouter la réponse du chatbot à l'historique du chat
      setChatHistory([...chatHistory, { type: 'bot', message: data }]);
    } catch (error) {
      console.error('Erreur lors de la communication avec le serveur:', error);
    }

    // Effacer le champ de saisie
    setUserInput('');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="chat-container">
            <div className="message-container">
              {chatHistory.map((entry, index) => (
                <div
                  key={index}
                  className={`message ${entry.type === 'user' ? 'user-message' : 'bot-message'} mb-2 p-2`}
                >
                  {entry.type === 'user' ? (
                    <strong className="text-primary">Vous :</strong>
                  ) : (
                    <strong className="text-success">Chatbot :</strong>
                  )}{' '}
                  {entry.message}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="form-control mr-2"
                placeholder="Posez une question..."
              />
              <button onClick={askQuestion} className="btn btn-primary">Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
