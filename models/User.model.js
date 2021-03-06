// User model here
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required.'],
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            trim: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: [true, 'Password is required.'],
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('User', userSchema);