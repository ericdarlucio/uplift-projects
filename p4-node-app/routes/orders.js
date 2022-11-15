const express = require('express');
const router = express.Router();

const Order = require('../models/Order');


router.get('/', (request, response) => {
  Order.find().then( result => {
    response.send(result);
  });
});

router.post('/', (request, response) => {
  let newOrder = new Order(request.body);
  newOrder.save().then( result => {
    Order.find().then( result => {
      response.send(result);
    });
  });
});

router.put('/:id', (request, response) => {});

router.delete('/', (request, response) => {});

module.exports = router;