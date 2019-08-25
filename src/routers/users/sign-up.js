const fs = require('fs');
var uuid = require('uuid');

const signUpRoute = (request, response) => {

        let body = '';

        request.on('data', function(data) {
            body = body + data; 
            console.log('Incoming data!');
        });

        request.on('end', function() {
            const user = JSON.parse(body);
            user.id = uuid.v4();
            // body = JSON.stringify(user, null, 4);
            //create/midify file user data
            let allUsers = fs.readFileSync(`./src/db/users/all-users.json`);
            allUsers = JSON.parse(allUsers);
            allUsers.push(user);
            fs.writeFileSync(`./src/db/users/all-users.json`, JSON.stringify(allUsers, null, 4));

            response.writeHead(201, {
                'Content-Type': 'application/json'
            });
            const result = {
                "status": "success", 
                "user": user
               }
            response.end(JSON.stringify(result));
        });
    };


module.exports = signUpRoute;