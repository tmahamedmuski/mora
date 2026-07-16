// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Login.css';  // Import the Login component's CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder='Enter the Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder='Enter the Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Login</button>
      </form>
      
      <p>Don't have an account?  <Link to="/signup">Signup</Link> </p> {/* Use Link instead of a normal anchor tag */}
    </div>
  );
};

export default Login;
