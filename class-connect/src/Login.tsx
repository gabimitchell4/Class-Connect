import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    // Validate username and password
    if (username === "test-user" && password === "jellybeans123") {
      navigate("/event");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="brand-title">Class Connect</h1>
      </div>
      <div className="login-right">
        <h2 className="login-title">Log In</h2>
        <p className="login-subtitle">
          Welcome back! Please log in to your account.
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <p className="login-footer">
          Don’t have an account?{" "}
          <a href="/" className="signup-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
