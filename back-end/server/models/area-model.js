const mongoose = require('mongoose');

module.exports = mongoose.model('Area', {
  places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  name: { type: String }
});
