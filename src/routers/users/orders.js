const fs = require('fs');
const url = require('url');

const orders = (request, response) => {
    let body = '';

    request.on('data', function (data) {
        body = body + data;
    });

    request.on('end', function () {
        let allProducts = fs.readFileSync('./src/db/products/all-products.json');
        allProducts = JSON.parse(allProducts);

        body = JSON.parse(body);
        const isRealProducts = body.products.every(orderProduct =>
            allProducts.find(allProduct => orderProduct == allProduct.name)
        );
        //TODO: add check user.id in order!
        let result;
        if (isRealProducts) {
            let allConfirmedOrders = fs.readFileSync(`./src/db/users/orders.json`);
            allConfirmedOrders = JSON.parse(allConfirmedOrders);

            allConfirmedOrders.push(body);
            fs.writeFileSync(`./src/db/users/orders.json`, JSON.stringify(allConfirmedOrders, null, 4))
            result =
                {
                    "status": "success",
                    "user": body
                }

            response.writeHead(201, {
                'Content-Type': 'application/json',
            });
            response.end(JSON.stringify(result));
        }
        else {
            result = { 'status': 'failed', 'order': [] }

            response.writeHead(400, {
                'Content-Type': 'application/json',
            });
            response.end(JSON.stringify(result));
        }
    })
}
module.exports = orders;