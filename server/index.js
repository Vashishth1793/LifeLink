const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const BloodRequest = require("./models/BloodRequest");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully ✅");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error ❌");
        console.log(error.message);
    });

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
app.get("/api/blood-requests", async (req, res) => {
    try {

   const bloodRequests = await BloodRequest.find().sort({ createdAt: -1 });

    res.json({
        success: true,
        message: "Blood requests fetched successfully",
       requests: bloodRequests
    });
        } catch (error) {

        console.log("Error fetching blood requests:");
        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch blood requests"
        });

    }

});
// Create New Blood Request
app.post("/api/blood-requests", async (req, res) => { 

    try {

    const bloodRequest = req.body;

    console.log("New Blood Request:");
    console.log(bloodRequest);

const newBloodRequest = new BloodRequest(req.body);

await newBloodRequest.save();

    res.status(201).json({
        success: true,
        message: "Blood request created successfully",
        request: newBloodRequest
    });

    } catch (error) {

        console.log("Error creating blood request:");
        console.log(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create blood request"
        });
    }

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});