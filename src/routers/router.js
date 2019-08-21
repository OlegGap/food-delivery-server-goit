const mainRoute = require('./main/main');
const products = require('./products/products');
const signUp = require('./users/sign-up');

const router = {
    '/signup': signUp,
    '/products': products,
    default: mainRoute
};

module.exports = router;