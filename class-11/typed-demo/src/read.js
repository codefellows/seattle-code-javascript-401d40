'use strict';

// const eventPool = require('./event-pool.js');

function confirmation(payload) {
  setTimeout(() => {
    console.log('Message read!');
  }, 3000);
}

module.exports = {
  confirmation,
}
