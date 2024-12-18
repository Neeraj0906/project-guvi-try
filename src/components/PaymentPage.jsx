import React, { useState } from 'react';
import '../styles/PaymentForm.css'; // Import your custom CSS file
import visa from '../assets/visa.png';
import chip from '../assets/chip.png';
import { isAuthenticated } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, push, set } from 'firebase/database';

function PaymentForm() {
  // Initialize state variables
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expMonth, setExpMonth] = useState('mm');
  const [expYear, setExpYear] = useState('yy');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle input changes
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleExpYearChange = (e) => {
    setExpYear(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  // Handle CVV flip animation
  const handleCvvMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleCvvMouseLeave = () => {
    setIsFlipped(false);
  };

  const navigate = useNavigate();

  function formatTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  }

  // Accessing the payment info
  const location = useLocation();
  const { flight } = location.state;
  const { itineraries, price } = flight;
  const { segments } = itineraries[0];
  const flightName = segments[0].carrierCode;
  const departureTime = formatTime(segments[0].departure.at);
  const arrivalTime = formatTime(segments[0].arrival.at);

  const bookingData = {
    cardNumber,
    cardHolder,
    expMonth,
    expYear,
    cvv,
    flightName,
    departureTime,
    flight, // Store the entire flight data
    timestamp: new Date().toString(), // Add a timestamp if needed
  };

  const storeBookingData = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('clicked');
    try {
      const response = await fetch('http://localhost:8000/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        // Handle success, e.g., display a success message to the user
        console.log('Booking submitted successfully');
        navigate('/dashboard');
      } else {
        // Handle errors, e.g., display an error message to the user
        console.error('Booking submission failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  // Ensure user is authenticated
  if (!isAuthenticated()) {
    navigate('/');
    return null;
  }

  return (
    <>
      <div>
        <h2>Flight Details</h2>
        <p>
          <strong>Flight Name:</strong> {flightName}
        </p>
        <p>
          <strong>Price:</strong> {`${price.total} ${price.currency}`}
        </p>
        <p>
          <strong>Departure Time:</strong> {departureTime}
        </p>
        <p>
          <strong>Arrival Time:</strong> {arrivalTime}
        </p>
      </div>

      <div className="container">
        <div className={`card-container ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="card">
            <div className="front">
              <div className="image">
                <img src={chip} alt="" className="chip" />
                <img src={visa} alt="" className="visa" />
              </div>
              <div className="card-number-box">{cardNumber || '################'}</div>
              <div className="flexbox">
                <div className="box">
                  <span>card holder</span>
                  <div className="card-holder-name">{cardHolder}</div>
                </div>
                <div className="box">
                  <span>expires</span>
                  <div className="expiration">
                    <span className="exp-month">{expMonth}</span>
                    <span className="exp-year">{expYear}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="stripe"></div>
              <div className="box">
                <span>cvv</span>
                <div className="cvv-box">{cvv}</div>
                <img src={chip} alt="" className="chip" />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={storeBookingData}>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength="16"
              className="card-number-input"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              className="card-holder-input"
              value={cardHolder}
              onChange={handleCardHolderChange}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                className="month-input"
                value={expMonth}
                onChange={handleExpMonthChange}
              >
                {/* Generate month options dynamically */}
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index} value={String(index + 1).padStart(2, '0')}>
                    {String(index + 1).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                className="year-input"
                value={expYear}
                onChange={handleExpYearChange}
              >
                {/* Generate year options dynamically (current year + next few years) */}
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index} value={String(new Date().getFullYear() + index).slice(-2)}>
                    {String(new Date().getFullYear() + index).slice(-2)}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength="4"
                className="cvv-input"
                value={cvv}
                onChange={handleCvvChange}
                onMouseEnter={handleCvvMouseEnter}
                onMouseLeave={handleCvvMouseLeave}
              />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </>
  );
}

export default PaymentForm;
