import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CdcStatistics from './Dot/fetchData.jsx';
import EyeExercise from './Dot/eyeExercise.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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
