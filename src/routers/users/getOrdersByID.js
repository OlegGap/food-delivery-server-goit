const Order = require('../../db/schemas/order');
const url = require('url');


const getOrder = (request, response) => {
    const id = url.parse(request.url).path.split('/')[2];

    const sendResponse = (order) => {
      console.log(order);
      
      response.status(200);
      response.json(order);
    };
 
   Order.findById(id)
      .then(sendResponse)
      .catch(err => {
        console.error(err)
      });
};

module.exports = getOrder;
