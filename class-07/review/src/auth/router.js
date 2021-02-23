'use strict';

// dependencies?
const express = require('express');
const Users = require('./model/user-model.js');
const basicAuth = require('./middleware/basic.js');

const router = express.Router();

// how has basicAuth changes our request?
function createSignin(req, res, next) {

  console.log(req.user); // {username: password}

  res.status(200).json({ user: req.user });
}

async function createSignup(req, res) {

  try {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
}

router.post('/signup', createSignup);
// signin
router.post('/signin', basicAuth, createSignin);



module.exports = router;
