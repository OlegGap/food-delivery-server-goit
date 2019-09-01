const Product = require('../../db/schemas/products');

const createProduct = (request, response) => {
  let body = '';

  request.on('data', function (data) {
    body = body + data;
    console.log('Incoming data!');
  });

  request.on('end', function () {
    const product = JSON.parse(body);


    const newProduct = new Product(product);

    const sendResponse = (product) => {
      console.log(product);

      response.json({
        status: 'success',
        product
      });
    };

    const sendError = () => {
      response.status(400);
      response.json({
        error: 'product was not saved'
      });
    };

    newProduct.save()
      .then(sendResponse) 
      .catch(sendError)
  })
};


module.exports = createProduct;