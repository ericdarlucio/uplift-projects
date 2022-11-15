const express = require('express');
const server = express();
const port = 8080;

server.get('/', (request, response) => {
  response.send('Welcome to express!');
});

server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});