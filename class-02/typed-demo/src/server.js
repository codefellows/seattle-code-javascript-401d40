'use strict';

const express = require('express');
const app = express();

const errorHandler = require('./middlewares/handle-errors.js'); 

const db = {
  'Jacob': { name: 'Jacob', role:  'Instructor' }
}

function getSlashRoleHandler(request, response){
  // console.log(request.params);

  response.send('test');
}

function logger(request, response, next) {

  console.log(`${request.method} :: ${request.url} :: ${new Date()}`);

  if (request.method === 'POST') {
    next('We can\'t do posts yet' );
  }

  next();
}

// syntax for every express router
// @params {String} endpoint
// @params {function} route handler
app.get('/', logger, (request, response) => {
  // console.log('here is our route request query',  request.query);

  if (db[request.query.name]) {
    console.log('something meaningful must happen');
  }

  response.json(db);
});

app.get('/:role', logger, getSlashRoleHandler);

app.post('/wrong', logger);

app.use(errorHandler);

// export this for tests and 
module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on port : ' + port);
    });
  }
}
