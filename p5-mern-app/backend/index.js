const express = require('express');
const server = express();
const port = 8080;

const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

server.get('/', (request, response) => {
  response.send('Welcome to ExpressJS!');
});

server.listen(port, () => {
  console.log('Listening on port', port);
});