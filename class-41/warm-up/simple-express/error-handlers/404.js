'use strict';
module.exports = function (request, response, next) {
  response.status(404).send('That route is not found');
};
