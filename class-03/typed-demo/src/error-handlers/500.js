'use strict';

module.exports = function(err, response, request, next) {
  console.log('Error found');

  const error = err.message ? err.message :  err;

  response.status(500).send(error);
}
