const mongoose = require('mongoose');

// Define the schema or table columns
const userSchema = new mongoose.Schema({
  name: String, // Shorthand for { type: String }
  email: { type: String, required: true, lowercase: true },
  age: { type: Number, min: 18, max: 65 },
  createdAt: { type: Date, default: Date.now }
});

// This line will create above columns in "User" table
const User = mongoose.model('User', userSchema);


export.modules = { User }