'use strict';

require('dotenv').config();

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: process.env.SQS_QUEUE,
  handleMessage: handler,
});

function handler(message) {
  console.log(message);
}

app.on('error', handler);
app.on('processing_error', handler);

app.start();
