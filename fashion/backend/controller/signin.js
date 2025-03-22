// controller/signin.js
const Signin = (req, res) => {
    // Logic for signing in (e.g., validate user credentials)
    const { username, password } = req.body;

    // Dummy validation (replace with actual logic)
    if (username === 'user' && password === 'pass') {
        res.status(200).send('Signin successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
};

module.exports = Signin;