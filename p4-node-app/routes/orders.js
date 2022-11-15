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
      response.send(result);
  });
});


router.put('/:id', (request, response) => {
  const orderId = request.params.id;
  Order.updateOne(
    { _id: orderId },
    { $set: {...request.body} }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.send({ status: "Order has been updated" });
    };
  });
});

router.delete('/:id', (request, response) => {
  const orderId = request.params.id;
  Order.deleteOne({_id: orderId}).then( result => {
    if( result.deletedCount === 1 ){
        response.send({status: "Order has been deleted"});
    }
  });
});

module.exports = router;