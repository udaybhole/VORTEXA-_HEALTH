// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:bdknum00@cluster0.2mknjxi.mongodb.net/FINAL")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    name: {
        type: String,
        required: true,
        maxLength: 50
    }
});



const User = mongoose.model('User', userSchema);

module.exports = {
	User
};

