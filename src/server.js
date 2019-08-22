const https = require('https');
const http = require('http');

const url = require('url');

const morgan = require('morgan');
const router = require('./routers/router.js');

const logger = morgan('combined');
const fs = require('fs');

const options = {
        prtkey: fs.readFileSync('server-key.pem', 'utf8'),
        prtcert: fs.readFileSync('server-crt.pem', 'utf8')
        // csr: fs.readFileSync('server.csr').toString()
    };

const startServer = (port) => {
    
    const server = http.createServer( (request, response) => {

        // Get route from the request
        const parsedUrl = url.parse(request.url);
        // Get router function
        const func = router[parsedUrl.pathname] || router.default;

        logger(request, response, () => func(request, response));
    });
    server.listen(port);
};

module.exports = startServer;