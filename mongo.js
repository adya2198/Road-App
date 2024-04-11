const mongoose = require("mongoose");
const MONGO_URL = require('./env.js');

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Exporting the collection model
const Collection = mongoose.model("Collection", newSchema);
module.exports = Collection;
