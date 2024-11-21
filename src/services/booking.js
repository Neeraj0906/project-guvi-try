import { getDatabase, ref, set, push, get, query, orderByChild, equalTo } from 'firebase/database';
import { getUserData } from './storage'; // Assuming you have a function to get user data

// Function to store a new booking in the database
export const storeBooking = async (user, ticketDetails) => {
  try {
    const database = getDatabase(); // Get a reference to the database
    const bookingsRef = ref(database, 'bookings'); // Reference to the "bookings" node

    // Generate a unique key for the new booking
    const newBookingRef = push(bookingsRef);

    // Define the data to be stored in the booking
    const bookingData = {
      userId: user.uid, // Store user ID instead of the entire user object
      ticketDetails: ticketDetails,
      timestamp: Date.now(), // Timestamp for sorting
    };

    // Store the data in the database under the unique key
    await set(newBookingRef, bookingData);
  } catch (error) {
    console.error("Error storing booking:", error);
  }
};

// Function to retrieve user's bookings from the database
export const getUserBookings = async () => {
  const database = getDatabase();
  const bookingsRef = ref(database, 'bookings');

  // Get the user ID
  const userId = getUserData()?.uid || getUserData().cardHolder;

  // Query to retrieve the user's bookings
  const userBookingsQuery = query(
    bookingsRef,
    orderByChild('userId'), // Assuming user ID is stored in booking data
    equalTo(userId)
  );

  // Retrieve and return the user's bookings
  try {
    const snapshot = await get(userBookingsQuery);
    if (!snapshot.exists()) {
      return []; // No bookings found
    }

    const userBookings = [];
    snapshot.forEach((childSnapshot) => {
      userBookings.push(childSnapshot.val());
    });

    return userBookings;
  } catch (error) {
    console.error("Error retrieving user bookings:", error);
    return []; // Return an empty array in case of an error
  }
};

export { database };
