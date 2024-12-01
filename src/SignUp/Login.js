import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="email address" className="input-field" required />
          <input type="password" placeholder="password" className="input-field" required />
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <p className="signup-link" onClick={() => navigate("/signup")}>Sign Up</p>
      </div>
    </div>
  );
};

export default Login;