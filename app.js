const http = require ('http');
const fs = require ('fs');
const path = require ('path');

function onRequest (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});

    const createPath = (page) => path.resolve (__dirname, 'views', `${page}.html`);

    let basePath = '';
    switch (request.url) {
        case '/':
            basePath = createPath('index');
            break;
        case '/login':
            basePath = createPath('login');
            break;
        case '/register':
            basePath = createPath('register');
            break;            
        default:
            basePath = createPath('error');
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        }
        else {
            response.write(data);
            response.end();
        }
    })
}

http.createServer(onRequest).listen(8000);