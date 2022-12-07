const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Schema
const Admin = require('../models/Admin');

// New admin creation. This is optional
router.post('/admin-register', async (request, response) => {
  const hashedPassword = await bcrypt.hash( request.body.password , 10 );
  const newAdmin = new Admin({
    ...request.body,
    password: hashedPassword
  });

  const checkUsername = await Admin.findOne({username: request.body.username});
  if (checkUsername){
    return response.send({ status: 'Username already used. Use a different username'});
  } else {
    newAdmin.save().then( result => {
      console.log(result);
      response.status(201).send({ status: 'New admin account has been created'});
    });
  }
});

// Admin login
router.post('/admin-login', (request, response) => {

  Admin.findOne({ username: request.body.username }).then( result => {
    if (result === null){
      response.status(404).send({
        status: "Invalid username or password"
      }
      );
    }else{
      bcrypt.compare( request.body.password, result.password, (error, match) => {
        if ( match ){
          response.status(200).send({
            status: 'Logged In successfully',
            id: result._id
          });
        }else{
          response.status(404).send({
            status: "Invalid username or password"
          })
        };
      });
    };
  });

})


module.exports = router;