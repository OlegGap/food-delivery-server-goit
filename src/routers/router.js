const mainRoute = require('./main/main');
const products = require('./products/products');
const productID = require('./products/productID')
const signUp = require('./users/sign-up');

const router = {
    '/signup': signUp,
    '/products': products,
    // '/products/:id': productID,
    default: mainRoute
};

module.exports = router;