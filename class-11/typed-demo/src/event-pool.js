'use strict';

const Events = require('events');
// This is the same event Emitter that is subscribing and publishing
const eventEmitter = new Events();

module.exports = eventEmitter;
