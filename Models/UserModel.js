const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    tempPinHash: String,
    bio: String,
    website: String,
})

const UserModel = new mongoose.model('User', UserSchema )

module.exports = UserModel