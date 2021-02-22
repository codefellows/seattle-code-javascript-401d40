'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// app.get('/sum', (req, res) => {
//   const x = parseInt(req.query.x);
//   const y = parseInt(req.query.y);
//   const sum = x + y;
//   res.send(`the sum is: ${sum}`);
// });

app.get('/sum/*', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send('youve hit the sum route');
})

app.get('/subtract/:x/:y', (req, res) => {
  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const dif = x - y;
  res.send(`the sum is: ${dif}`);
});

app.get('/multiply', (req, res) => {
  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const product = x * y;
  res.send(`the sum is: ${product}`);
});

app.get('/divide', (req, res) => {
  const x = parseInt(req.query.x);
  const y = parseInt(req.query.y);
  const factor = x / y;
  res.send(`the sum is: ${factor}`);
});

app.listen(PORT, () => console.log('How are ya now?', PORT));
