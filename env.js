// Importing dotenv to load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Fetching MONGO_URL from the environment variables
const MONGO_URL = process.env.MONGO_URL;

// Exporting MONGO_URL for use in other files
module.exports = MONGO_URL;
