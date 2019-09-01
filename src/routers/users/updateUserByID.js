const User = require('../../db/schemas/user');
const url = require('url');
const bcrypt = require('bcrypt');

const getUser = (request, response) => {

  let body = '';

  
  request.on('data', function (data) {
    body = body + data;
  });

  request.on('end', function () {

    const user = JSON.parse(body);
    const id = url.parse(request.url).path.split('/')[2];

    if (user.password) {
      user.password = bcrypt.hashSync(user.password, 10);
    }

    const sendError = () => {
      response.status(400);
      response.json({
        status: 'error',
        text: 'there is no such user'
      });
    };

    const sendResponse = (newUser) => {
      if (!newUser) {
        return sendError();
      }

      response.json({
        status: 'success',
        user: newUser
      });
    };

    User
      .findOneAndUpdate(
        { _id: id },
        user,
        { new: true } // вернуть обновленный документ
      )
      .then(sendResponse)
      .catch(sendError)
  })
};

module.exports = getUser;