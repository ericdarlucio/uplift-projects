// Import
const express = require('express');
const router = express.Router();

// Schema
const Order = require('../models/Order');

// CRUD

// Create a new order
router.post('/', (request, response) => {
  let newOrder = new Order(request.body);
  newOrder.save().then( result => {
      response.status(201).send(result);
  });
});

// Return all orders
router.get('/', (request, response) => {
  Order.find().then( result => {
    response.status(200).send(result);
  });
});

// Update orderStatus and soft deletion
router.put('/:id', (request, response) => {
  const orderId = request.params.id;
  Order.updateOne(
    { _id: orderId },
    { $set: {...request.body} }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.status(200).send({ status: "Order status has been updated" });
    };
  });
});

// Hard delete order
router.delete('/:id', (request, response) => {
  const orderId = request.params.id;
  Order.deleteOne({_id: orderId}).then( result => {
    if( result.deletedCount === 1 ){
        response.status(200).send({status: "Order has been deleted"});
    }
  });
});

module.exports = router;