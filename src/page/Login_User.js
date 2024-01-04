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
        window.location.href = "/reponse";
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
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
              {error && <p className="text-danger mt-3">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
