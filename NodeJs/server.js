const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function handler(req, res) {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("hello world!");
        // fs.readFile('html/main.html', function (err, content) {
        //     if (err) {
        //         console.log(err);
        //         res.statusCode = 500;
        //         res.setHeader('Content-Type', 'text/plain');
        //         res.end('Server error');
        //         return;
        //     }
        //
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'text/html');
        //     res.end(content);
        // });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Not found page");
        // fs.readFile('html/notFound.html', function (err, content) {
        //     if (err) {
        //         console.log(err);
        //         res.statusCode = 500;
        //         res.setHeader('Content-Type', 'text/plain');
        //         res.end('Server error');
        //         return;
        //     }
        //
        //     res.statusCode = 404;
        //     res.setHeader('Content-Type', 'text/html');
        //     res.end(content);
        // });
    }
}


const server = http.createServer(handler);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

