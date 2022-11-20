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
	const result = await newBusiness.save();
	response.status(201).send(result);
});

// Business login
router.post('/login', async (request, response) => {
	const result = await Business.findOne({ email: request.body.email });
	if (result === null) {
		response.status(404).send({
			status: 'Invalid username or password',
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
					status: 'Invalid username or password',
				});
			}
		});
	}
});

// Show active businesses
router.get('/', async (request, response) => {
	const result = await Business.find({ businessStatus: 'active' });
	response.status(200).send(result);
});

// Show one business by business._id
router.get('/:id', async (request, response) => {
  const businessId = request.params.id;
	const result = await Business.findOne(
    { _id: businessId }
  ).populate('reviews');
	response.status(200).send(result);
});

// Update business information
router.put('/:id', async (request, response) => {
  const businessId = request.params.id;
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

// Soft deletion or deactivate
router.put('/:id/deactivate', async (request, response) => {
  const businessId = request.params.id;
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
router.delete('/:id/delete', async (request, response) => {
  const businessId = request.params.id;
  let result = await Business.deleteOne(
    { _id: businessId }
  );
  if( result.deletedCount === 1 ){
    response.status(200).send({ status: "Business account has been deleted", id: businessId });
  }
});

module.exports = router;
