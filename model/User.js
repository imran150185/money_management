const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: string,
        required: true,
        trim: true

    },
    email: {
        type: string,
        required: true,
    },
    passaword: {
        type: string,
        required: true,
        
    },
    balance: Number,
    income: Number,
    expense: Number,
    transactions: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'transaction' 
        }]
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User