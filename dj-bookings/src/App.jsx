// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bookings from './components/Bookings.jsx'; // Import the Bookings component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bookings />} />
      </Routes>
    </Router>
  );
};

export default App;
