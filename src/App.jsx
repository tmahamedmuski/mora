// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Login from './components/Login';
import Signup from './components/Signup';  // Import Signup component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
