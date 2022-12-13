const mongoose = require("mongoose");

//DB Structure
const ProductsSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: { type: String, title: true },
  price: { type: Number },
  description: { type: String },
  category: { type: String },
  image: { type: String },
});

mongoose.models = {}; //Next js
module.exports = mongoose.model("Products", ProductsSchema);
