const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

let isConnected = false; // Track the connection status

const db = async () => {
  if (isConnected) {
    // Use existing connection
    console.log('Using existing DB connection');
    return;
  }

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URL, {
      // Optional settings for compatibility and stable connection
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB Connected');
  } catch (error) {
    console.error('DB connection error:', error);
    throw error;
  }
};

module.exports = { db };
