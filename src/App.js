// src/App.js
import React from 'react';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Chatbot Interface with AI</h1>
      <Chat />
    </div>
  );
}

export default App;
