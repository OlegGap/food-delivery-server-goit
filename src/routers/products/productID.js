const productID = (request, response) => {

    response.writeHead(200, { "Content-Type": "text/html" });
    console.log(request.url.split('/')[2]);
    
    response.write("<h1>It`s productid page!</h1>");
    response.end();

};

module.exports = productID;