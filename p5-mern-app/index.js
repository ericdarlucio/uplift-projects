const express = require('express');
const server = express();
const port = 8080;
const morgan = require('morgan');

server.use(morgan('dev'));

server.get('/', (request, response) => {
  response.send('Welcome to ExpressJS!');
});

server.listen(port, () => {
  console.log('Listening on port', port);
});