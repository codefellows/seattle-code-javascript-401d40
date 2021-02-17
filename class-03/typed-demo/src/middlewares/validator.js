'use strict';


// validate if a name exists on our request query string
module.exports = function(request, response, next) {

  if(!parseInt(request.params.id)) {
    // response.status(500).end();
    next('Invalid person ID');
  } else {
    next();
  }
}
