'use strict';

//  Express middleware for handling request errors.
//   error middleware  get a special first parameter
//   when you pass an argument into the next function, this gets passed along as the `err` parameter
module.exports = function (err, request, response, next) {

  const error = err.message ? err.message : err;


  const errorObject = {
    status: 500,
    message: error,
  }

  response.status(errorObject.status).json(errorObject);
}
