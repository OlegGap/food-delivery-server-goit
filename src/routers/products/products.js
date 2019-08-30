const Product = require('../../db/schemas/products');
const url = require('url');

const getProduct = (request, response) => {
    const id = url.parse(request.url).path.split('/')[2];

    const sendResponse = (product) => {
      console.log(product);
      
      response.status(200);
      response.json(product);
    };

   Product.findById(id)
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
};

module.exports = getProduct;