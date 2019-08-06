const http = require("http"),
  url = require("url");
  // morgan = require("morgan"),
  // router = require("./routers/router"),
  // logger = require("nodemon");

const startServer = port => {
  const server = http.createServer((request, response) => {
debugger

    // const parseUrl = url.parse(request.url);

    // response.end('Hello Node.js Server!');
    // const func = router[parseUrl.pathname] || router.default;

    // logger(request, response, () => func(request, response));
    response.end('Hello Node.js Server!');
  });

  server.listen(port);
};

module.exports = startServer;
