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