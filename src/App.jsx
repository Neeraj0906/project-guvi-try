import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchFlights from './components/SearchFlights'; // Adjusted to match the correct path
import DashboardPage from './components/Dashboard'; // Adjusted to match the correct path
import LoginPage from './components/Login'; // Adjusted to match the correct path
import RegisterPage from './components/Register'; // Adjusted to match the correct path
import PaymentPage from './components/PaymentPage'; // Adjusted to match the correct path
import Home from './components/Home'; // Adjusted to match the correct path
import { FlightDataProvider } from './components/FlightDataContext'; // Adjusted to match the correct path
import BookingList from './components/BookingList'; // Adjusted to match the correct path

function App() {
  return (
    <FlightDataProvider>
      <Router>
        <Routes>
          {/* Define all routes for your components */}
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<SearchFlights />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/bookings" element={<BookingList />} />
        </Routes>
      </Router>
    </FlightDataProvider>
  );
}

export default App;
