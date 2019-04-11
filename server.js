const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 4000;

server.use(bodyParser.json());

server.get('/', function(request, response) {
    console.log('Server runs on port: ' + port, 'Path: ' + request.path);

    response.sendFile(__dirname + "/index.html");
});

server.get('/test-url', function(request, response) {
    console.log('Server runs on port: ' + port, 'Path: ' + request.path);

    response.sendFile(__dirname + "/response.json");
});

server.post('/test-post', function(request, response) {
    console.log('Server runs on port: ' + port, 'Path: ' + request.path);

    console.log(request.body);

    response.sendFile(__dirname + "/response.json");
});

server.get('/code.js', function(request, response) {
    console.log('Server runs on port: ' + port, 'Path: ' + request.path);

    response.sendFile(__dirname + "/code.js");
});

console.log('Server is up');

server.listen(port);
