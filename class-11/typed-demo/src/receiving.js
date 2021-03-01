'use strict';

const eventPool = require('./event-pool.js');

function confirmation(payload) {
  console.log('Message for ', payload.userId, ' has been received');

  eventPool.emit('read', { text: payload.text });
}

module.exports = {
  confirmation,
}
