'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:275199309843:pickup';
const orderItem = process.env[2];

const order = {
  storeName: '1-800-flowers',
  orderItem,
}

const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

sns.publish(params).promise().then(console.log).catch(console.error);
