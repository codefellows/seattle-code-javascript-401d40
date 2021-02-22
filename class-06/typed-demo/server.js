'use strict';

require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');

const app = express();

// allow our server to receive  JSON from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// defining our User Schema
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // this should always be encrypted
});

// lifecycle method, that can run functions beforeor after certain events
userSchema.pre('save', async function () {
  // this will refer to the instance being made
  console.log(this);
});


// static  model methods
// this allows  our mongoose model to perfrom generic.
userSchema.statics.example = async function () {
  console.log(this);
}

const UserModel = mongoose.model('api_user', userSchema);

// Find a User by there username, and compare password to encrypted hash
app.post('/signin', async (req, res, next) => {

  let basicHeader = req.headers.authorization.split(' '); // ['Basic', 'fbuyewgf327'];
  let encodedString = basicHeader[1]; //  'fbuyewgf327';
  let decodedString = base64.decode(encodedString); // 'username:password'
  let [username, password] = decodedString.split(':');

  // we  need to search our DB
  let userFromDB = await UserModel.findOne({ username: username });

  // If found, we need to compare passwords
  let isValid = await bcrypt.compare(password, userFromDB.password);

  if (isValid) {
    //  we have a match and the user has successfully logged in
    res.json(userFromDB);
  } else {
    next('Invalid User Sign In');
  }
});


// create a new User, with a username / password.  The password should always be encrypted before saving.
app.post('/signup', async (req, res) => {

  let username = req.body.username;
  let password = req.body.password;

  // encrupt immediately
  let encryptedPassword = await bcrypt.hash(password, 5);
  // create our user
  const newUser = new UserModel({ username: username, password: encryptedPassword });
  const document = await newUser.save();

  // send user to the client.
  res.status(201).json(document);
});


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  app.listen(3000, () => console.log('App is running'));
});
