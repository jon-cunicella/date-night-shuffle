const mongoose = require('mongoose');

module.exports = mongoose.model('Place', {
  name: { type: String },
  price: { type: String }
});
