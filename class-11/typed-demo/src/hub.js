'use strict';

// Dependencies
const eventPool = require('./event-pool.js');
const Message = require('./message.js');
const User = require('./users.js');
const sending = require('./sending.js');
const receiving = require('./receiving.js');
const read = require('./read.js');

const userInterface = new User();
const messageInterface = new Message();

// Event that will be published, setting up subscribers for events.
eventPool.on('send', sending.sendMessage);
eventPool.on('received', receiving.confirmation);
eventPool.on('read', read.confirmation);

// Artificial interaction point.
setInterval(() => {
  eventPool.emit('send', { user: userInterface.create('Jacob'), message: messageInterface.create('Hey There', 'Jacob', 'Jacob') });
}, 2000);
