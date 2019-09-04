
const Order = require('../../db/schemas/order');
const Products = require('../../db/schemas/products');
const fs = require('fs');

const orders = (request, response) => {
    let body = '';

    request.on('data', function (data) {
        body = body + data;
    });

    request.on('end', function () {

        let allProducts = fs.readFileSync('./src/db/products/all-products.json');
        allProducts = JSON.parse(allProducts);

        body = JSON.parse(body);


        //TODO: add check to product is valid 

        // const isRealProducts = body.productsList.reduce((result, orderProduct) => {
        //     result += Products.findOne({ name: orderProduct.product }, (err, product) => {
        //         return product;
        //         // result = product ? true : false;
        //     });
        //     console.log(result);
        //     return result;
            
        // }, []
        // );

        //TODO: add check user.id in order!
        isRealProducts = true;
        if (isRealProducts) {
            const newOrder = new Order(body);

            const sendResponse = (newOrder) => {
                // console.log(newOrder);

                response.json({
                    status: 'success',
                    newOrder
                });
            };
            const sendError = (err) => {
                console.log(err.message);


                response.status(400);
                response.json({
                    error: 'order was not saved'
                });
            };

            newOrder.save()
                .then(sendResponse)
                .catch(sendError)
        }
        else {
            response.status(400);
            response.json({ 'status': 'failed', 'order': [] });
        }
    })
}
module.exports = orders;