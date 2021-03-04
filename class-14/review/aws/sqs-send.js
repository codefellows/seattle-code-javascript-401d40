'use strict';

// send a message through aws

require('dotenv').config();
const { v4: uuid } = require('uuid');
const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: process.env.SQS_QUEUE,
  region: 'us-west-2'
  // accessKeyId
  // secreAccessKey
});

producer.send({
  id: uuid(),
  body: 'Something new'
}, function (err, msg) {

  if (err) {
    console.error(err);
  } else {
    console.log('message sent', msg);
  }
});
