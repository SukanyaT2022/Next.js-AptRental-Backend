// This schema will create Product table in MongoDB

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  description: text,
  rating: Number,
  price: { Number, required:true }
  createdAt: { type: Date, default: Date.now }
});

// This line will create above columns in "User" table
const Products = mongoose.model('Products', userSchema);


export.modules = { Products }