const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'field "name" must be fulfilled'],
    minlength: [2, 'min "name" field length - 2'],
    maxlength: [30, 'max "name" field length - 30'],
  },
  link: {
    type: String,
    required: true,
    minlength: 2,
    validate: {
      // eslint-disable-next-line no-undef
      validator: (v) => validator.isURL(v, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
      message: 'field "link" must be a valid url-address',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
