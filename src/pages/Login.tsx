import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/common/InputField";
import Button from "../components/common/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Function to handle login for saved credentials
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // A Mock check (will replace with a backend call later)
    if (email && password) {
      navigate("/dashboard"); // redirecting to landing page
    } else {
      alert("Please enter both fields");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome</h2>
        <p>Login to your account</p>

        {/* Form to hold login or registration details */}
        <form onSubmit={handleLogin}>
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <Button text="Login" type="submit" />
        </form>

        {/* Registration */}
        <p className="auth-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
