const mongoose = require('mongoose');
const contactScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('contacts', contactScheme);
