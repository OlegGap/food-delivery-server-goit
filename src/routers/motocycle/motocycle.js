const fs = require('fs');
const path = require('path');

const motocycleRoute = (request, response) => {
    const filePath = path.join(__dirname, 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/sportster/iron-883/overview/dom/19-sportster-iron-883-hero.jpg');
    const image = fs.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': image.size
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(response);
};

module.exports = motocycleRoute;