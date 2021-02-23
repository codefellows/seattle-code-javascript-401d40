'use strict';

const express = require('express');
const app = express();

const authRouter = require('./auth/router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

module.exports = {
  app: app,
  start: () => {
    app.listen(process.env.PORT, () => console.log('App is running on PORT :: ' + process.env.PORT));
  }
}
