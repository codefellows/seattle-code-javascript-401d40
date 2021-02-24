'use strict';


//  this is called function currying ( a function that returns another function )
module.exports = (capability) => (req, res, next) => {

  try {
    if (req.user.capabilities.includes(capability)) {
      next();
    } else {
      next('Access Denied');
    }
  } catch (err) {
    next('Authorization Error');
  }

}
