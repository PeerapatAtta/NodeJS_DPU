//  Purpose: Create a simple server using http module
// create http from http package
const http = require('http');

// create server
const server = http.createServer((req, res) => {
    res.end('<h1>Hello from the server</h1>');
});

// listen to incoming requests
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});