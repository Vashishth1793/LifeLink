const express = require("express");

const app = express();

const PORT = 5000;

// Home Route
app.get("/", (req, res) => {
    res.send("LifeLink Backend is Running 🚀");
});

// About Route
app.get("/about", (req, res) => {
    res.send("Welcome to LifeLink Backend");
});
app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "LifeLink API is Working",
        version: "1.0.0"
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});