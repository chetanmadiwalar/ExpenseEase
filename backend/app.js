// api/app.js

const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const { db } = require('./db/db');

const app = express();

// Connect to DB
db();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["https://chetanexpenseease.netlify.app", "http://localhost:3000"],
  })
);

// API routes
readdirSync(path.join(__dirname, './routes')).forEach((routeFile) => {
  const routePath = path.join(__dirname, './routes', routeFile);
  app.use('/api/v1', require(routePath));
});
app.use('/api/auth', authRoutes);

// Export the handler for serverless
module.exports = serverless(app);
