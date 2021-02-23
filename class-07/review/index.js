'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./src/server.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => {
    server.start();
  });
