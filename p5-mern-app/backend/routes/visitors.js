const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Visitor = require('../models/Visitor');

// Register new user
router.post('/register', async (request, response) => {
	let hashedPassword = await bcrypt.hash(request.body.password, 10);
	let newVisitor = new Visitor({
		...request.body,
		password: hashedPassword,
	});
  
  const checkEmail = await Visitor.findOne({email: request.body.email});

  if (checkEmail){
    return response.send({ status: 'Email already used. Use a different email'});
  } else {
    newVisitor.save().then( result => {
      response.status(201).send({ status: 'New user account has been created'});
    });
  };

});

// User login
router.post('/login', async (request, response) => {
	const result = await Visitor.findOne({ email: request.body.email });
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

module.exports = router;