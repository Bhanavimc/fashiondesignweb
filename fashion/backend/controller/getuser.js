// controller/getuser.js
const Getuser = (req, res) => {
    // Logic to get user information (e.g., from database)
    // Dummy user data (replace with actual data retrieval)
    const user = {
        id: 1,
        username: 'user',
        email: 'user@example.com'
    };

    res.status(200).json(user);
};

module.exports = Getuser;