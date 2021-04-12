'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const routes = require('./routes.js');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

app.use(express.static('public'));
app.use(express.json()); // attaching a json body to a request
app.use(express.urlencoded({ extended: true })); // form urlencoded data

app.use(routes);
app.use(notFound);
app.use(serverError);

app.listen(PORT, () => {
  console.log('App is listening');
});
