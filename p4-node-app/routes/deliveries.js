const express = require('express');
const router = express.Router();

// Schema
const Delivery = require('../models/Delivery');

// CRUD

// Return all deliveries
router.get('/', (request, response) => {
  Delivery.find().then( result => {
    response.status(200).send(result);
  });
});

// Return all orders on a single delivery
router.get('/:id/orders', (request, response) => {
  Delivery.findOne(
    {_id: request.params.id},
    {orders: 1}
  )
  .populate('orders')
  .then( result => {
    response.status(200).send(result);
  });
});

// Create
router.post('/', (request, response) => {
  let newDelivery = new Delivery(request.body);
  newDelivery.save().then( result => {
      response.status(201).send(result);
  });
});

// Update
router.put('/:id', (request, response) => {
  const deliveryId = request.params.id;
  Delivery.updateOne(
    { _id: deliveryId },
    { $set: {...request.body} }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.status(200).send({ status: "Delivery has been updated" });
    };
  });
});

// Delete
router.delete('/:id', (request, response) => {
  const deliveryId = request.params.id;
  Delivery.deleteOne({_id: deliveryId}).then( result => {
    if( result.deletedCount === 1 ){
        response.status(200).send({status: "Delivery has been deleted"});
    }
  });
});

module.exports = router;