const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const { readdirSync } = require('fs');
const path = require('path');
require('dotenv').config();

const authRoutes = require('../routes/auth');
const { db } = require('../db/db');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://chetanexpenseease.netlify.app", "http://localhost:3000"],
  })
);

const routesDir = path.join(__dirname, '../routes');
readdirSync(routesDir).forEach((routeFile) => {
  app.use('/api/v1', require(path.join(routesDir, routeFile)));
});
app.use('/api/auth', authRoutes);

let connectionPromise;

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (!connectionPromise) {
    connectionPromise = db();
  }
  await connectionPromise;

  return serverless(app)(event, context);
};
