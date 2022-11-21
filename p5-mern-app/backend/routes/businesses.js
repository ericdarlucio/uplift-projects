const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Business = require('../models/Business');

// Register new business
router.post('/register', async (request, response) => {
	let hashedPassword = await bcrypt.hash(request.body.password, 10);
	let newBusiness = new Business({
		...request.body,
		businessStatus: 'active',
		password: hashedPassword,
	});

	const checkEmail = await Business.findOne({email: request.body.email});

  if (checkEmail){
    return response.send({ status: 'Email already used. Use a different email'});
  } else {
    newBusiness.save().then( result => {
      response.status(201).send({ status: 'New business has been registered'});
    });
  };
});

// Business login
router.post('/login', async (request, response) => {
	const result = await Business.findOne({ email: request.body.email });
	if (result === null) {
		response.status(404).send({
			status: 'Invalid email or password',
		});
	} else {
		bcrypt.compare(request.body.password, result.password, (error, match) => {
			if (match) {
				response.status(200).send({
					status: 'Logged In successfully',
					id: result._id,
				});
			} else {
				response.status(404).send({
					status: 'Invalid email or password',
				});
			}
		});
	}
});

// Show active businesses
router.get('/', async (request, response) => {
	const result = await Business.find({ businessStatus: 'active' },{
    password: 0
  });
	response.status(200).send(result);
});

// Show one business by business._id
router.get('/:businessId', async (request, response) => {
  const businessId = request.params.businessId;
	const result = await Business.findOne({ _id: businessId }, {
    password: 0,
    businessStatus: 0
  }
  ).populate('reviews', { author: 1, comment: 1 });
	response.status(200).send(result);
});

// Update business information
router.put('/:businessId', async (request, response) => {
  const businessId = request.params.businessId;
	let result = await Business.updateOne(
    { _id: businessId },
    { $set: { ...request.body } }
  );
  if (result.modifiedCount === 1) {
    response.status(200).send({ status: "Business information has been updated" });
  } else if (result.modifiedCount === 0) {
    response.status(200).send({ status: "No changes in the business information has been made" });
  };
});


// Add reviews to business profile
router.put('/:businessId/reviews/:reviewId', async ( request, response ) => {
  let businessId = request.params.businessId;
  let reviewId = request.params.reviewId;
  let result = await Business.updateOne(
      { _id: businessId }, 
      { $push: { reviews: reviewId }}
  );
  if( result.modifiedCount === 1 ){
      response.send({ status: "Review has been added to the business profile" });
  }
});


// Soft deletion or deactivate
router.put('/:businessId/deactivate', async (request, response) => {
  const businessId = request.params.businessId;
	let result = await Business.updateOne(
    { _id: businessId },
    { $set: { businessStatus: "inactive" } }
  );
  if (result.modifiedCount === 1) {
    response.status(200).send({ status: "Business has been deactivated", id: businessId });
  }else if (result.modifiedCount === 0) {
    response.status(200).send({ status: "Business already deactivated", id: businessId });
  };
});

// Permanent delete
router.delete('/:businessId/delete', async (request, response) => {
  const businessId = request.params.businessId;
  let result = await Business.deleteOne(
    { _id: businessId }
  );
  if( result.deletedCount === 1 ){
    response.status(200).send({ status: "Business account has been deleted", id: businessId });
  }
});

module.exports = router;
