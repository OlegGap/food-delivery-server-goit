const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const ordersSchema = new Schema({
        "creator": String, //userID
        "productsList": [
          { 
            product: String, //productID
            typeOrder: String, //"M" || "XL" || "XXL",
            itemsCount: Number
          }
        ],
        "deliveryType": String, //"delivery" || "office", 
        "deliveryAdress": String,
        "sumToPay": Number, //"600",
        "status": String, //"inProgress" || "declined" || "finished" || "failed"
       
});

ordersSchema.plugin(timestamp);

const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;