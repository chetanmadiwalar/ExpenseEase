const express = require('express')
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({
    origin:["https://chetanexpenseease.netlify.app","http://localhost:3000"]
}))

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
app.use('/api/auth', authRoutes);

const server = () => {
    db()
    app.get('/', (req, res) => {
        res.send('API is running')
    })
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}



server()