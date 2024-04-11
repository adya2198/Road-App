// mongo.js
const mongoose = require("mongoose");

// Schema for complaints
const complaintSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    complaintType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
