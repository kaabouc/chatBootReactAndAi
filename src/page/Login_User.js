import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/login", {
        username: name,
        password: password,
      });

      if (response.data) {
        // Successful login, perform actions (e.g., redirect)
        console.log(response);
        localStorage.setItem("userId", response.data.id);
        // Redirect to another page or perform other actions upon successful login
        // Example: Redirect to the questionnaire page
        window.location.href = "/chatbot";
      } else {
        // Handle login failure
        console.log("Login failed");
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error during login:", error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Login failed. Server responded with ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError("Network error. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred during login. Please try again.");
      }
    }
  };

  const toggleForm = () => {
    // Add your logic for toggling between sign-in and sign-up forms if needed
  };

  return (
    <div className="wrapper container d-flex flex-column justify-content-between align-items-between mt-5 ">
      <div className="form-wrapper sign-in ">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
          <div className="signUp-link">
            <p>
              Don't have an account? <a href="#" className="signUpBtn-link" onClick={toggleForm}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      {/* Add the sign-up form or other components if needed */}
    </div>
  );
}

export default Login;
