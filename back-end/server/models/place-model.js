const mongoose = require("mongoose");

module.exports = mongoose.model("Place", {
  name: { type: String },
  price: { type: String },
  category: { type: String },
  rating: { type: Number },
  area: { type: String }
});
