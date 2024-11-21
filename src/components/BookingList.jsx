import React, { useState, useEffect } from 'react';

function BookingList() {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('http://localhost:8000/api/booking'); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setFlightData(data);
        } else {
          throw new Error('Failed to fetch flight data');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Bookings</h2>
      <h2>Flight Details</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : flightData.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {flightData.map((flight) => (
            <li key={flight._id}>
              <strong>Flight Price:</strong> {flight.flight.price?.currency} {flight.flight.price?.total}
              <br />
              <strong>Departure Airport:</strong> {flight.flight.itineraries[0].segments[0].departure.iataCode}
              <br />
              <strong>Arrival Airport:</strong> {flight.flight.itineraries[0].segments[0].arrival.iataCode}
              <br />
              <strong>Departure Time:</strong> {flight.departureTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookingList;
