'use strict';

const socketio = require('socket.io');

const io = socketio(3000);

// creates our namespace;
const caps = io.of('/caps');

// default
// io.on('connection', () => {});

// caps connection, socket.io gives our callback a socket
caps.on('connection', (socket) => {

  console.log('Socket connected ', socket.id);

  // waits for an event to be emitted on a socket
  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    // name the event, and pass a paylaod to send out.
    caps.emit('pickup', payload);
  });

  socket.on('in-transit', payload => {
    logger('in-transit', payload);
    caps.emit('in-transit', payload);
  });

  socket.on('delivered', payload => {
    logger('delivered', payload);
    caps.emit('delivered', payload);
  });
});

function logger(event, payload) {
  let time = new Date();
  console.log({ time, event, payload });
}
