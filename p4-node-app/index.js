const express = require('express');
const server = express();
const port = 8030;
const mongoose = require('mongoose'); 
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

//Middlewares
server.use(bodyParser.json());
server.use(cors());
server.use(morgan('dev'));
server.use(helmet());

server.get('/', (request, response) => {
  response.send('Welcome to ExpressJS!');
});

// Router
const OrderRouter = require('./routes/orders');
const AuthRouter = require('./routes/auth');
const DeliveryRouter = require('./routes/deliveries')

// Router Endpoints
server.use('/api/v1/orders', OrderRouter);
server.use('/api/v1/auth', AuthRouter);
server.use('/api/v1/deliveries', DeliveryRouter);


//MongoDB Connect
mongoose.connect('mongodb://localhost:27017/water-deliverydb');


server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});