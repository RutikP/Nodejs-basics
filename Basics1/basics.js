//Creating a server

const http = require('http');
const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler); //This create server actually returns a server

server.listen(3000);