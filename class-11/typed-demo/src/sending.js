'use strict';


const eventPool = require('./event-pool.js');

function sendMessage(payload) {

  console.log('Sending Message!!',
    `Text: ${payload.message.text} :: `,
    `Sending to ${payload.message.receiver}`
  );

  eventPool.emit('received', { userId: payload.message, text: payload.message.text });
}


module.exports = {
  sendMessage,
}
