'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/caps');

// wait for pick up event to be emitted from the server
socket.on('pickup', (payload) => {

  // what is our response?
  setTimeout(() => {
    console.log('picked up package, now in-transit', payload);
    socket.emit('in-transit', payload);
  }, 1500);


  setTimeout(() => {
    console.log('Package delivered', payload);
    socket.emit('delivered', payload);
  }, 3000);

});
