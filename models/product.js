const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductItem = new Schema ({
  name: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  quantity:{
    type: Number,
    required: true
  }
})

module.exports = Product = mongoose.model("item", ProductItem)