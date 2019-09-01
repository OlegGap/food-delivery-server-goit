const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  telephone: String,
  nickName: String,
  location: String,
  password: String,
  email: String,
  favoriteProducts: [String],
  viewedProducts: [String],
  orders: {
      user: String,
      products: [String],
      deliveryType: String,
      deliveryAdress: String
  }
});

userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;