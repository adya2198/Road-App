// mongo4.js
const mongoose = require("mongoose");

const adminDataSchema = new mongoose.Schema({
    cement: Number,
    asphalt: Number,
    concrete: Number,
    stones: Number,
    labour: Number
});

const AdminData = mongoose.model("AdminData", adminDataSchema);

module.exports = AdminData;
