// Import necessary modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const listEndpoints = require("express-list-endpoints");

const app = express();

// Define allowed origins for CORS
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3008'
];

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Handle request timeout
app.use((req, res, next) => {
    res.setTimeout(600000, () => {
        console.error('Request timeout');
        res.status(408).json({ message: 'Request Timeout', error: true, success: false });
    });
    next(); // Call next middleware
});

// CORS preflight handling
app.options('*', cors());

// Use the router
app.use("/api", router);

// Error handling middleware
app.use((error, req, res, next) => {
    console.error("Error", error.stack);
    res.status(error.status || 500).json({
        message: error.message,
        error: true,
    });
});

// Start the server and connect to the database
const PORT = process.env.PORT || 8080;
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log(listEndpoints(app));
        });
    })
    .catch(err => {
        console.error("Error connecting to the database:", err);
    });