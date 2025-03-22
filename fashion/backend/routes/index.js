const express = require('express');
const router = express.Router();

// Import your controllers
const postT = require("../controller/adddesign");
const Signin = require("../controller/signin");
const Login = require("../controller/login");
const Logoout = require("../controller/logout");
const Getuser = require("../controller/getuser");

// Define your routes here
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post("/signin", Signin); // Ensure Signin is a function
router.post("/save-design", postT); // Ensure postT is a function
router.post("/login", Login); // Ensure Login is a function
router.post("/logout", Logoout); // Ensure Logoout is a function
router.get("/getuser", Getuser); // Ensure Getuser is a function

// Export the router
module.exports = router;