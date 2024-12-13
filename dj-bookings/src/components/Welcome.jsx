// Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Add styles for animations

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome Back Carter!</h1>
        <p className="welcome-message">We're excited to have you here. Let's get started by managing your bookings.</p>
        <Link to="/bookings">
          <button className="cta-btn">Click to See Your Bookings</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
