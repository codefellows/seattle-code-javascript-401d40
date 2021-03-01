'use strict';

// bring in the node events modules

const Events = require('events');
// This is the same event Emitter that is subscribing and publishing
const eventEmitter = new Events();

// define an event and an event handler
eventEmitter.on('send', async (payload) => {
  console.log('message sent', payload);
  eventEmitter.emit('received', { user: '12haf73647634' });
});

eventEmitter.on('received', async (payload) => {
  console.log('User', payload.user, 'has received their message');
  eventEmitter.emit('read', { messageId: '1234787yajsdhfaf' });
});

eventEmitter.on('read', async (payload) => {
  console.log('Great', payload.messageId, ' is finished');
});


// publishes an event for our 'send' subscriber
eventEmitter.emit('send', { message: 'hello word' });
