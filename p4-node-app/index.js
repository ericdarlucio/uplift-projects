const express = require('express');
const server = express();
const port = 8080;
const OrderRouter = require('./routes/orders');
const bodyParser = require('body-parser');
const cors = require('cors');

server.get('/', (request, response) => {
  response.send('Welcome to express!');
});

server.use('/api/v1/orders', OrderRouter);
server.use(bodyParser.json());
server.use(cors());

server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});