const mongoose = require('mongoose');


const LimitSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
        default: 0
    },
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    
}, {timestamps: true})

module.exports = mongoose.model('Limit', LimitSchema)