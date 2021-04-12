'use strict';
const express = require('express');
const router = express.Router();
router.get('/', (request, response) => {
  response.send('hello');
});
router.post('/save', (request, response) => {
  console.log(request.body);
  response.send(request.body);
});
module.exports = router;
