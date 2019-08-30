const Product = require('../../db/schemas/products');
const url = require('url');

const getProduct = (request, response) => {

  let body = '';

  
  request.on('data', function (data) {
    body = body + data;
  });

  request.on('end', function () {

    const product = JSON.parse(body);
    const id = url.parse(request.url).path.split('/')[2];

    const sendError = () => {
      response.status(400);
      response.json({
        status: 'error',
        text: 'there is no such product'
      });
    };

    const sendResponse = (newProduct) => {
      if (!newProduct) {
        return sendError();
      }

      response.json({
        status: 'success',
        product: newProduct
      });
    };

    Product
      .findOneAndUpdate(
        { _id: id },
        product,
        { new: true } // вернуть обновленный документ
      )
      .then(sendResponse)
      .catch(sendError)
  })
};

module.exports = getProduct;