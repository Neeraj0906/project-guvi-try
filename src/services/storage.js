export const storeUserData = (data) => {
    // Store user data along with an expiration time (e.g., token expires after 1 hour)
    const expirationTime = Date.now() + 3600000; // 1 hour
    const userData = { ...data, expirationTime }; // Add expiration time to user data
    localStorage.setItem('userData', JSON.stringify(userData)); // Store as JSON
};

export const getUserData = () => {
    const data = localStorage.getItem('userData');
    if (data) {
        const userData = JSON.parse(data);
        // Check if the token has expired
        if (userData.expirationTime > Date.now()) {
            return userData; // Return user data if valid
        } else {
            removeUserData(); // Remove expired data
        }
    }
    return null; // Return null if no valid user data
};

export const removeUserData = () => {
    localStorage.removeItem('userData'); // Remove the user data from localStorage
};
