import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [admin_name, setAdminName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (admin_name === "naveen@gmail.com" && password === "1234" || admin_name === "nk@gmail.com" && password === "1234"  ) {
      setMessage("Login Successful!");
      setTimeout(() => navigate("/home"), 800 ); 
    } else {
      setMessage("Invalid admin name or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login your E-Mail</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Enter your E-Mail"
          value={admin_name}
          onChange={(e) => setAdminName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" onClick={{navigate}}>Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Login;
