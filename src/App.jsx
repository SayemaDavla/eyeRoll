import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CdcStatistics from './Dot/fetchData.jsx';
import EyeExercise from './Dot/eyeExercise.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// This component provides navigation between the Eye Exercise and Eye Health pages
// It uses react-router-dom to manage the routes
// The Eye Exercise page displays an interactive eye exercise animation
// The Eye Health page displays statistics on eye health from the CDC

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/eyeRoll">Eye Exercise</Link>
            </li>
            <li>
              <Link to="/risk-factors">Eye Health</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/eyeRoll" exact element={<EyeExercise/>} />
          <Route path="/risk-factors" exact element={<CdcStatistics/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
