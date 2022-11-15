const express = require('express');
const server = express();
const mongoose = require('mongoose'); 
const morgan = require('morgan')
const port = 8080;
const OrderRouter = require('./routes/orders');
const bodyParser = require('body-parser');
const cors = require('cors');

server.get('/', (request, response) => {
  response.send('Welcome to express!');
});

server.use(bodyParser.json());
server.use(cors());
server.use(morgan('dev'));

server.use('/api/v1/orders', OrderRouter);

mongoose.connect('mongodb://localhost:27017/water-deliverydb');

server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});