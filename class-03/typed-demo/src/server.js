'use strict';

const express = require('express');
const app = express();

// 2 middlewares that perform specific server bahaviors
const logger = require('./middlewares/logger.js');
const FiveHundred = require('./error-handlers/500.js');
const FourHundred = require('./error-handlers/404.js');

const personRouter = require('./routes/person.js');

app.use(express.json());
app.use(logger);
app.use(personRouter);

//define our GET on '/person' endpoint????
// app.get('/person', logger, validator, (request, response, next) => {

//   let resObject = { name: request.query.name };

//   // send json object with a name, and the name attached via query String
//   response.json(resObject);
// });

app.use(FourHundred);
app.use(FiveHundred);

module.exports = {
  app: app,
  start: (port) =>  {
    app.listen(port, () => console.log('App is running on port :: ' + port))
  }
}
