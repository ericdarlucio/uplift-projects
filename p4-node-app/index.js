const express = require('express');
const server = express();
const port = 8080;

server.listen(port, (request, response) => {
  console.log('Listening on port', port);
})