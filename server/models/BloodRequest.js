const mongoose = require("mongoose");
const bloodRequestSchema = new mongoose.Schema({
    patientName: {
    type: String,
    required: true,
    trim: true
},
bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
},
units: {
    type: Number,
    required: true,
    min: 1
},
hospitalName: {
    type: String,
    required: true,
    trim: true
},
city: {
    type: String,
    required: true,
    trim: true
},
contactNumber: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/
},
urgency: {
    type: String,
    required: true,
   enum: ["normal", "urgent", "emergency"]
},
requiredDate: {
    type: Date,
    required: true
},
message: {
    type: String,
    trim: true,
    default: ""
}

}, { timestamps: true });


const BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);

module.exports = BloodRequest;