const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
        console.log('Db Connected')
    } catch (error) {
        console.log(`${error}`);
    }
}

module.exports = {db}