// const https = require('https');
const http = require('http');
// const https = require('https');

const url = require('url');

const morgan = require('morgan');
const router = require('./routers/router.js');

const logger = morgan('combined');
const fs = require('fs');

const options = {
    key: fs.readFileSync('server.key', 'utf8'),
    cert: fs.readFileSync('server.crt', 'utf8')
}; 

const startServer = (port) => {

    const server = http.createServer((request, response) => {


        // Get route from the request
        const parsedUrl = url.parse(request.url);

        const urlArray = parsedUrl.pathname.split('/'); 
        if (typeof parseInt(urlArray[2]) === 'number' || parsedUrl.query !== null) {
            request.parsedUrl = parsedUrl;
            parsedUrl.pathname = '/products';//i
        }

        // Get router function
        const func = router[parsedUrl.pathname] || router.default;

        logger(request, response, () => func(request, response));
    });
    server.listen(port);
};

module.exports = startServer;