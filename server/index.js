const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use('/', express.static(path.join(__dirname, '../dist/')));
app.use('/*', express.static(path.join(__dirname, '../dist/index.html')));

const serverPort = process.env.PORT || 10000;
const server = http.createServer(app).listen(serverPort);

server.on('error', (error) => {
    console.log(error);
});
server.on('listening', () => {
    console.log(`Listening ${serverPort}`);
});
