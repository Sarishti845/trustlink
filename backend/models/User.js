const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Every email must be unique
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['customer', 'provider'], // Role must be one of these two
    default: 'customer',
  },
  isVerified: {
    type: Boolean, // For the provider verification badge
    default: false,
  },
}, {
  timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;