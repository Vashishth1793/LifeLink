const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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

// Get All Blood Requests
app.get("/api/blood-requests", (req, res) => {

    res.json({
        success: true,
        message: "Blood requests fetched successfully",
        requests: []
    });

});
// Create New Blood Request
app.post("/api/blood-requests", (req, res) => {

    const bloodRequest = req.body;

    console.log("New Blood Request:");
    console.log(bloodRequest);

    res.status(201).json({
        success: true,
        message: "Blood request created successfully",
        request: bloodRequest
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});