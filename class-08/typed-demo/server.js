'use strict';

const express = require('express');
const Users = require('./users-model.js');
const bearerAuth = require('./bearer-middleware.js');
const accessControl = require('./access-control-middleware.js');

const app = express();
app.use(express.json());


// app.use('/api/v1', routerV1)
// app.use('/api/v2', routerV2)
app.post('/signup', async (req, res) => {

  // Creating a new User
  const newUser = new Users(req.body);
  const record = await newUser.save();

  //   Responds with a token
  res.status(201).json(record);
});

// how do we determine the capability
app.get('/food', bearerAuth, accessControl('read'), (req, res) => {
  res.send("You can read Food!");
});

app.post('/food', bearerAuth, accessControl('write'), (req, res) => {
  res.send('You can create Food');
});


module.exports = {
  app: app,
  start: () => {
    app.listen(3000, () => {
      console.log('App is running');
    })
  }
}
