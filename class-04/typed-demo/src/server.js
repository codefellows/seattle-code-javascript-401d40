'use strict';

const express = require('express');
const app = express();

const personRouter = require('./routes/person.js');

//  middleware for managing json data on request objects
app.use(express.json());
app.use(personRouter);


module.exports = {
  app: app,
  start: (port) => {
    app.listen(port, () => console.log('App is running on :: ' + port));
  }
}
