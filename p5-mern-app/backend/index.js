const express = require('express');
const server = express();
const port = 8080;
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
const BusinessRouter = require('./routes/businesses');
const ReviewRouter = require('./routes/reviews');
const VisitorRouter = require('./routes/visitors');

// Router Endpoints
server.use('/api/v1/businesses', BusinessRouter);
server.use('/api/v1/reviews', ReviewRouter);
server.use('/api/v1/visitors', VisitorRouter);


//MongoDB Connect
mongoose.connect('mongodb://localhost:27017/hello-mapandandb');


server.listen(port, (request, response) => {
  console.log('Listening on port', port);
});
