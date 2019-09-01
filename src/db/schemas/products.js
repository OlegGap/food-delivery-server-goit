const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const productSchema = new Schema({
  name: String,
  sku: Number,
  description: String,
  price: Number,
  likes: Number,
  currency: String,
  creatorId: String,
  categories: [String]
});

productSchema.plugin(timestamp);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;