'use strict';

const Users = require('./users-model.js');


module.exports = async (req, res, next) => {
  // read the token, from the request header
  let token = req.headers.authorization.split(' ')[1];

  if (!token) {
    next('Invalid Login');
  }

  // verify the token using the User Model
  try {
    let validUser = await Users.authenticateToken(token);
    req.user = validUser;
    next();
  } catch (err) {
    next('User validation error');
  }

}

// try catch

// anytime you want to do somethiing that is error prone / or unknown
    //  whenver you are handing off functionality to somethiing, 3rd party libraries or methods on somethiing else
