'use strict';

const socketio = require('socket.io');

//opens up the server for connections
const io = socketio(3000);

//namespaces
const caps = io.of('/caps');

// a lot of variablity here, because we are using JavaScript. 

// If we could use a class to validate our queue here, things will be a lot less dicey.
const undeliveredQueue = {
  pickup: {},
  inTransit: {},
  delivered: {},
};

// HashMap: we'll talk abouut in 2 weeks.

caps.on('connection', (socket) => {
  console.log('Socket connected: ', socket.id);

  socket.on('pickup', payload => {
    undeliveredQueue.pickup[payload.messageId] = payload;

    console.log('EVENT:', payload);

    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', payload => {
    undeliveredQueue.inTransit[payload.messageId] = payload;

    console.log('EVENT', payload);

    socket.emit('in-transit', payload);
  });

  socket.on('received', payload => {
    delete undeliveredQueue.pickup[payload.messageId];
    delete undeliveredQueue.inTransit[payload.messageId];
    delete undeliveredQueue.delivered[payload.messageId];

    socket.broadcast.emit('received', payload);
  });

  socket.on('getAll', () => {
    for (let key in undeliveredQueue.pickup) {
      socket.emit('pickup', undeliveredQueue.pickup[key]);
    }
    for (let key in undeliveredQueue.inTransit) {
      socket.emit('in-transit', undeliveredQueue.inTransit[key]);
    }
    for (let key in undeliveredQueue.delivered) {
      socket.emit('delivered', undeliveredQueue.delivered[key]);
    }
  });

  socket.on('delivered', payload => {
    undeliveredQueue.delivered[payload.messageId] = payload;

    console.log('EVENT:', payload);

    socket.broadcast.emit('delivered', payload);
    caps.emit('delivered', { messageID: payload.messageId, payload: payload });
  });
});
