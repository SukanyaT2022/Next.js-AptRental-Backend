// This schema will create User table in MongoDB

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, lowercase: true },
  password: {type: String, required: true},
  createdAt: { type: Date, default: Date.now }
});

// This line will create above columns in "User" table
const USER = mongoose.model('User', userSchema);


module.exports = { USER }