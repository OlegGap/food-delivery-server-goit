const fs = require('fs');
const path = require('path');

const ProductsRouter = (request, response) => {

    response.writeHead(200, {
        'Content-Type': 'application/json',
    });;

    const filePath = path.join(__dirname, '../../db/products/all-products.json');
    const allProducts = fs.readFileSync(filePath);
    response.end(allProducts);
};

module.exports = ProductsRouter;