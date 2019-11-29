const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        postalCode : Number
    },
    hobbies : [String]
})

const User = mongoose.model('User', userSchema);

module.exports = User;