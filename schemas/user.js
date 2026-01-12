// This schema will create User table in MongoDB

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, lowercase: true },
  age: { type: Number, min: 18, max: 65 },
  password: {type: String}
  createdAt: { type: Date, default: Date.now }
});

// This line will create above columns in "User" table
const USER = mongoose.model('User', userSchema);


module.exports = { USER }