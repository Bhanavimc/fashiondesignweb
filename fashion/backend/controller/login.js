// controller/login.js
const Login = (req, res) => {
    // Logic for logging in (e.g., check session or token)
    const { username } = req.body;

    // Dummy login logic (replace with actual logic)
    if (username) {
        res.status(200).send(`Welcome back, ${username}!`);
    } else {
        res.status(400).send('Login failed');
    }
};

module.exports = Login;