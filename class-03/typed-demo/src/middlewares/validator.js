'use strict';


// validate if a name exists on our request query string
module.exports = function(request, response, next) {

  if(!request.params.id) {
    // response.status(500).end();
    next('No ID specified');
  } else {
    next();
  }
}
