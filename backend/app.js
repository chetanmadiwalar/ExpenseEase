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
origin:["[https://chetanexpenseease.netlify.app","http://localhost:3000](https://chetanexpenseease.netlify.app%22,%22http://localhost:3000)"]
}))

db()

//routes
readdirSync('./routes').map((route) => app.use('[https://expense-ease-nine.vercel.app/api/v1](https://expense-ease-nine.vercel.app/api/v1)', require('./routes/' + route)))
app.use('[https://expense-ease-nine.vercel.app/api/auth](https://expense-ease-nine.vercel.app/api/auth)', authRoutes);


app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})

app.listen(PORT, () => {
console.log('listening to port:', PORT)
})
