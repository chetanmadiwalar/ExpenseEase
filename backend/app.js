const express = require('express')
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const serverless = require('serverless-http');
const path = require('path');

require('dotenv').config();

const app = express();

// Connect to DB
db();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: [
    "https://chetanexpenseease.netlify.app",
    "http://localhost:3000"
  ],
  credentials: true
}));

// Routes
const routesDir = path.join(__dirname, './routes');
readdirSync(routesDir).forEach((route) => {
  app.use('/api/v1', require(path.join(routesDir, route)));
});
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

// Export the handler for Vercel
module.exports = app;