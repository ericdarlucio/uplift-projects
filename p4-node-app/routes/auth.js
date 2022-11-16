const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Schema
const Admin = require('../models/Admin');

// Admin register. Creating a new account will be optional
router.post('/admin-register', async (request, response) => {
  const hashedPassword = await bcrypt.hash( request.body.password , 10 );
  const newAdmin = new Admin({
    ...request.body,
    password: hashedPassword
  });
  newAdmin.save().then( result => {
    console.log(result);
    response.status(201).send({ status: 'Admin has been created'});
  });
});

// Admin login
router.post('/admin-login', (request, response) => {

  Admin.findOne({ username: request.body.username }).then( result => {
    if (result === null){
      response.status(404).send({
        status: "Invalid credentials"
      }
      );
    }else{
      bcrypt.compare( request.body.password, result.password, (error, match) => {
        if ( match ){
          response.status(200).send({
            status: 'Valid credentials',
            id: result._id
          });
        }else{
          response.status(404).send({
            status: "Invalid credentials"
          })
        };
      });
    };
  });

})


module.exports = router;