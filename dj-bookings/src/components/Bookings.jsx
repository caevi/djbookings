import React, { useState, useEffect } from 'react';
import './Bookings.css'; // Your updated styles

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch the bookings from the backend
    const fetchBookings = async () => {
      try {
        const response = await fetch('https://djtooloud-website-1.onrender.com/api/bookings');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  // Function to handle booking deletion
  const handleDeleteBooking = async (id) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this booking?');

    if (isConfirmed) {
      try {
        const response = await fetch(`https://djtooloud-website-1.onrender.com/api/bookings/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (data.message === 'Booking successfully deleted') {
          setBookings((prevBookings) => prevBookings.filter(booking => booking._id !== id)); // Remove booking from state
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  return (
    <div className="bookings-container">
      <h1 className="bookings-title">DJ Tooloud's Bookings</h1>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking._id} className="booking-item">
            <h3 className="booking-name">{booking.name}</h3>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Event Type:</strong> {booking.eventType}</p>
            <div className="booking-details">
              <p><strong>Message:</strong> {booking.message || 'No additional message'}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteBooking(booking._id)}>
              Delete Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
