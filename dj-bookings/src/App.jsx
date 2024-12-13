// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Welcome from './components/Welcome'; // Import the Welcome component
import Bookings from './components/Bookings'; // Import the Bookings component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />  {/* Default route */}
        <Route path="/bookings" element={<Bookings />} /> {/* Bookings route */}
      </Routes>
    </Router>
  );
};

export default App;
