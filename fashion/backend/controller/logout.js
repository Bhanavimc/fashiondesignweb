// controller/logout.js
const Logoout = (req, res) => {
    // Logic for logging out (e.g., destroy session or token)
    // Here we just send a response
    res.status(200).send('Logout successful');
};

module.exports = Logoout;