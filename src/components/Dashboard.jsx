import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "./Navbar";
import { UserDetailsApi } from "../services/api";
import { logout, isAuthenticated } from "../services/auth";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", localId: "" });
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details on component mount
  useEffect(() => {
    if (isAuthenticated()) {
      setUserLoading(true);
      UserDetailsApi()
        .then((response) => {
          setUser({
            name: response.data.users[0].displayName,
            email: response.data.users[0].email,
            localId: response.data.users[0].localId,
          });
        })
        .catch((err) => {
          setError("Error fetching user data: " + err.message);
        })
        .finally(() => setUserLoading(false));
    } else {
      setUserLoading(false); // Stop loading if not authenticated
    }
  }, []);

  // Fetch flight data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/booking"); // Replace with your actual API endpoint
        if (response.ok) {
          const data = await response.json();
          setFlightData(data);
        } else {
          setError("Error fetching flight data");
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Logout functionality
  const logoutUser = () => {
    logout();
    navigate("/login");
  };

  // Redirect to login if user is not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  // Navigate to home page
  const navigatetoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar logoutUser={logoutUser} />
      <main role="main" className="container mt-5 my-12">
        <div className="container">
          <div className="text-center mt-5">
            <h3>Dashboard Page</h3>
            {userLoading ? (
              <p>Loading user data...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              user.name && user.email && user.localId && (
                <div>
                  <strong className="text-bold">Hi {user.name}</strong>
                  <br />
                  <p>Your email is {user.email}</p>
                  <br />
                </div>
              )
            )}
          </div>
        </div>

        <div>
          {loading ? (
            <p>Loading flight details...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul>
              {flightData.map((flight) => (
                <li key={flight._id}>
                  <strong>Price:</strong> {flight.flight.price?.currency} {flight.flight.price?.total}
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

        <div className="my-8">
          <button className="btn" onClick={navigatetoHome}>Go To Home</button>
        </div>
      </main>
    </div>
  );
}
