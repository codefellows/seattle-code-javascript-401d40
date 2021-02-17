'use strict';

// What do express middleware functions need???
module.exports = function(request, response,  next) {
 
  console.log(`${request.method} :: ${request.path}`);

  next();
}
