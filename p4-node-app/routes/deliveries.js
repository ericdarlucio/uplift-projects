const express = require('express');
const router = express.Router();

// Schema
const Delivery = require('../models/Delivery');

// CRUD

// Return all deliveries with barangay and quantity
router.get('/', (request, response) => {
  Delivery.find()
  .populate('orders',{
    _id: 0,
    barangay: 1,
    orderQty: 1
  })
  .then( result => {
    response.status(200).send(result);
  });
});

// Return all orders on a single delivery
router.get('/:id', (request, response) => {
  Delivery.findOne(
    {_id: request.params.id},
    {orders: 1}
  )
  .populate('orders', {
    _id: 0,
    firstName: 1,
    lastName: 1,
    contactNum: 1,
    streetNum: 1,
    streetName: 1,
    barangay: 1,
    orderQty: 1
  })
  .then( result => {
    response.status(200).send(result);
  });
});

// Create new delivery
router.post('/', (request, response) => {
  let newDelivery = new Delivery(request.body);
  newDelivery.save().then( result => {
      response.status(201).send(result);
  });
});

// Update delivery status
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

// Soft deletion
router.put('/:id/softdelete', (request, response) => {
  const deliveryId = request.params.id;
  Delivery.updateOne(
    { _id: deliveryId },
    { $set: { deliveryStatus: 'deleted' } }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.status(200).send({ status: "Delivery has been removed" });
    };
  });
});

// Hard delete a delivery
router.delete('/:id', (request, response) => {
  const deliveryId = request.params.id;
  Delivery.deleteOne({_id: deliveryId}).then( result => {
    if( result.deletedCount === 1 ){
        response.status(200).send({status: "Delivery has been deleted"});
    }
  });
});

module.exports = router;