'use strict';

const jwt = require('jsonwebtoken');

// check the reques for Bearer Token
module.exports = async (req, res, next) => {

  // yank apart the req.headers
  let bearerHeaderParts = req.headers.authorization.split(' ');  // ['Bearer', 'eyJhbGciOiJIUzI1NiIsInR5cC...']
  let token = bearerHeaderParts.pop();  // eyJhbGciOiJIUzI1NiIsInR5cC...

  try {

    // JsonWebtoken library to verify the token signature
    let validUser = jwt.verify(token, process.env.SECRET);

    console.log(validUser);

    if (validUser) {
      req.user = validUser;
      next();
    }
    else {
      next('Invalid User');
    }
  } catch (error) {
    next('Invalid Login');
  }
};
