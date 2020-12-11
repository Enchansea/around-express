const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
  },
  avatar: {
    type: String,
    required: true,
    validate: /^https?:\/\/(www\.)?[(.*)][#?]$/i,
  },
});

module.exports = mongoose.model('user', userSchema);