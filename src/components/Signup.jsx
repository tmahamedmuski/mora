// src/components/Signup.jsx
import React, { useState } from 'react';
import './Signup.css';  // Import the Signup component's CSS
import { Link } from 'react-router-dom';  // To use a link to the Login page

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your signup logic here (e.g., send data to server or validate input)
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder='Enter the Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        <div>
          <label>confirm Password:</label>
          <input
            type="password"
            placeholder='Confirm Enter the Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <p>Already have an account? <Link to="/login">Login here</Link></p>  {/* Link to Login */}
    </div>
  );
};

export default Signup;
