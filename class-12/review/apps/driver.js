'use strict';

const events = require('../libs/events.js');

events.on('pickup', (payload) => {

  setTimeout(() => {
    console.log(`DRIVER: pick up order ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);


  setTimeout(() => {
    console.log('DELIVERED', payload);
    events.emit('delivered', payload);
  }, 3000)
});
