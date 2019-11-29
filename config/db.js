require('dotenv').config()

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false    
});

const db = mongoose.connection;

module.exports = db;