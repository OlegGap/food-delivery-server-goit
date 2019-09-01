const express = require('express');
const app = express();

const main = require('./routers/main/main');

const signUp = require('./routers/users/createUser');
const putUserByID = require('./routers/users/updateUserByID');

const orders = require('./routers/users/createOrder');
const getOrders = require('./routers/users/getOrdersByID');

const createProduct = require('./routers/products/createProduct');
const getProducts = require('./routers/products/products');
const putProducts = require('./routers/products/updateProductByID');


app.get('/', main);
app.post('/products', createProduct);
app.get('/products/:id', getProducts);
app.put('/products/:id', putProducts);

app.post('/users', signUp);
app.put('/users/:id', putUserByID);
   
app.post('/orders', orders);
app.get('/orders/:id', getOrders);



const startServer = (port) => {
    app.listen(port, () => {
        console.log('Server is on ' + port);
     });
}

module.exports = startServer;