const qs = require('querystring');
const fs = require('fs');


const signUpRoute = (request, response) => {

    if (request.method === 'POST') {
        let body = '';

        request.on('data', function(data) {
            body = body + data;
            console.log('Incoming data!');
        });

        request.on('end', function() {
            const user = JSON.parse(body);
            //create/midify file user data
            fs.writeFileSync(`./src/db/users/${user.username}.json`, body);
            response.writeHead(201, {
                'Content-Type': 'application/json'
            });
            const result = {
                "status": "success", 
                "user": user
               }
            response.end(JSON.stringify(result));
        });
    }
};

module.exports = signUpRoute;