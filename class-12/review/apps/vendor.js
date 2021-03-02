'use strict';

const faker = require('faker');
const events = require('../libs/events.js');
// fake orderId
// fake name
// fake address

// generate a fake package every 5 seconds
setInterval(() => {
  let order = {
    orderId: faker.random.uuid(),
    name: faker.name.findName(),
    address: faker.address.city(),
  }

  events.emit('pickup', order);
}, 5000);

// respond to delivery with console log
events.on('delivered', (payload) => {
  console.log('Thank you!!')
});
