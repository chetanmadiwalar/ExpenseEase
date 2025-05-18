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
app.use(express.urlencoded({ extended: true }));


// API routes
const routesDir = path.join(__dirname, './routes');
readdirSync(routesDir).forEach((routeFile) => {
  app.use('/api/v1', require(path.join(routesDir, routeFile)));
});
app.use('/api/auth', authRoutes);

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})

app.listen(5000, () => {
    console.log("Server is listening on port http://localhost:5000");
})

