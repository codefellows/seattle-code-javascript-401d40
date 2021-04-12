'use strict';
module.exports = function (err, request, response, next) {
  const error = err.message ? err.message : err;

  const errorObject = {
    status: 500,
    message: error,
  };
  response.status(errorObject.status).json(errorObject);
};
