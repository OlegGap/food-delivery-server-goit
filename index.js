const startServer = require("./src/server");
const { port } = require("./config");
const fs = require('fs');

// const options = {
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.crt')
// };

startServer(port);