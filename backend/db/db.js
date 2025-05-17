const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb://localhost:27017/expenseTracker')
        console.log('Db Connected')
    } catch (error) {
        console.log(`${error}`);
    }
}

module.exports = {db}