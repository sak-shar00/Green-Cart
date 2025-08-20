const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    cartItem: {
      type: Object,
      default: {}
    }
  },
  {
    minimize: false,  // ✅ This goes in schema options
    timestamps: true  // ✅ Optional: adds createdAt and updatedAt
  }
);

const User = mongoose.models.user||mongoose.model('user', userSchema);

module.exports = User;
