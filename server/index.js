// Import Express
const express = require("express");

// Create Express application
const app = express();

// Port number
const PORT = 5000;

// Home Route
app.get("/", (req, res) => {
    res.send("LifeLink Backend is Running 🚀");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});