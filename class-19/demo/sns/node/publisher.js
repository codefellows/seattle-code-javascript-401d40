'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
var sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:orders';
const message = process.argv[2];
const params = {};

if (message) {
  params["Message"] = message;
} else {
  params["Message"] = 'No message provided';
}

params["TopicArn"] = topic;

sns.publish(params).promise().then(console.log).catch(console.error);
