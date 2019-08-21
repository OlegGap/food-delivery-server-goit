const fs = require('fs');
const path = require('path');

const ProductsRouter = (request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/json',
    });;

    const filePath = path.join(__dirname, '../../db/products/all-products.json');
    const allProducts = fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        let productsJSON = JSON.parse(data);
        response.write(JSON.stringify(productsJSON));
        response.end();
    });
};

module.exports = ProductsRouter;