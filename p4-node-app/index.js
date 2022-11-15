const express = require('express');
const server = express();
const port = 8080;

const OrderRouter = require('./routes/orders');

server.use('/api/v1/orders', OrderRouter);

server.get('/', (request, response) => {
  response.send('Welcome to express!');
});

server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});