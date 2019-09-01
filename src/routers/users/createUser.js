const User = require('../../db/schemas/user');
const bcrypt = require('bcrypt');

const createUser = (request, response) => {
  let body = '';

  request.on('data', function (data) {
    body = body + data;
    console.log('Incoming data!');
  });

  request.on('end', function () {
    const user = JSON.parse(body);

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const userData = { ...user, password: hashedPassword };

    const newUser = new User(userData);

    const sendResponse = (user) => {
      console.log(user);

      response.json({
        status: 'success',
        user
      });
    };

    const sendError = () => {
      response.status(400);
      response.json({
        error: 'user was not saved'
      });
    };

    newUser.save()
      .then(sendResponse)
      .catch(sendError)
  })
};


module.exports = createUser;