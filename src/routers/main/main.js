    const mainRoute = (request, response) => {

        response.writeHead(200, { "Content-Type": "text/html" });
        // console.log(request.url);
        
        response.write("<h1>It`s main page!</h1>");
        response.end();

    };

    module.exports = mainRoute;