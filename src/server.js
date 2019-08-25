const express = require('express');
const app = express();

const main = require('./routers/main/main');
const products = require('./routers/products/products');
const signUp = require('./routers/users/sign-up');
const getUserByID = require('./routers/users/getUserByID');
const orders = require('./routers/users/orders');
// const addImage = require('./routers/users/addImage');

app.get('/', main);
app.get('/products', products);
app.get('/products/:id', products);

app.post('/users', signUp);
app.get('/users/:id', getUserByID);
   
app.post('/orders', orders);

// app.post('./image', addImage);



const startServer = (port) => {
    app.listen(port);
}

module.exports = startServer;