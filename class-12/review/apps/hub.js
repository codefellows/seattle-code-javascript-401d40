'use strict';

// bring in it's depenciencies
const events = require('../libs/events.js');
require('./driver.js');
require('./vendor.js');

events.on('pickup', handleEvent);
events.on('in-transit', handleEvent);
events.on('delivered', handleEvent);

function handleEvent(payload) {
  console.log(`EVENT : ${JSON.stringify(payload)}`);
}
