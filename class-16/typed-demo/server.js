'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('You have hit the home route');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App is up and running');
});
