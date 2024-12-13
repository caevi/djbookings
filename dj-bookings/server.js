// services/api.js
export const fetchBookings = async () => {
    try {
      const response = await fetch('https://djtooloud-website-1.onrender.com/api/bookings');
      if (!response.ok) throw new Error('Failed to fetch bookings');
      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  