const fs = require('fs');
const url = require('url');

const getUserByID = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json',
    });
    const parsedUrl = url.parse(request.url);
    const urlArray = parsedUrl.path.split('/');

    let allUsers = fs.readFileSync(`./src/db/users/all-users.json`);
    result = JSON.parse(allUsers).filter(user => user.id === urlArray[2]);
    if (result.length !== 0) {
        result = {
            "status": "success",
            "user": result
        }
    } else {
        result = {'status': 'not found'}
    }
    response.end(JSON.stringify(result));
};
module.exports = getUserByID;