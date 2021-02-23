'use strict';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Users = require('./auth/users-model.js');
const app = express();

const basicAuth = require('./auth/basic-middleware.js');
const bearerAuth = require('./auth/bearer-middleware.js');
const { response } = require('express');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signin', basicAuth, (req, res) => {


  //  if basic Auth validates let's make a token out of the user data
  const token = jwt.sign({ user: req.user }, process.env.SECRET);

  console.log(token);

  res.status(200).json({ user: req.user, token: token });
})

app.post('/signup', async (req, res) => {

  try {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    const token = jwt.sign({ user: record }, process.env.SECRET);

    res.status(201).json({ user: { _id: record._id, username: record.username }, token: token });
  } catch (e) { res.status(403).send("Error Creating User"); }

});

app.get('/food', bearerAuth, (req, res) => {
  res.send('You can fetch food!');
});

app.post('/food', bearerAuth, (req, res) => {
  res.send('You can create Food!');
});

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(3000, () => {
      console.log('App is running');
    });
  });

