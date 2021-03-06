const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
      message: 'field "avatar" must be a valid url-address',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
