'use strict';

const socketio = require('socket.io');

const io = socketio(3000);

const chat = io.of('/chat');

// simple messaging for storing message object while the server is running.

// How can we ensure more clients can receive messages?
const messageQueue = {
  // can we create a key for every client?
  sent: {},
  received: {},
}

chat.on('connection', (socket) => {

  console.log('Socket connected : ', socket.id);

  // we need to response to a 'message' event
  // this will create a new message and store it in our queue.
  socket.on('message', payload => {
    messageQueue.sent[payload.messageId] = payload;

    socket.broadcast.emit('message', payload);
    console.log(messageQueue);
    // chat.emit('message', payload);
  });


  // we neeed to respond to a `received` event
  //  this will remove a message from the queue, place it into the received queue.
  socket.on('received', (payload) => {
    delete messageQueue.sent[payload.messageId];
    messageQueue.received[payload.messageId] = payload;
    // onlly required for clients that need to response to a `received` event.
    socket.broadcast.emit('delivered', payload);
  });

  // we also need to respond to clients that come online and need messages from the queue.
  socket.on('getMessages', () => {
    for (let key in messageQueue.sent) {

      // this goes back to the same socket that emitted the event.
      socket.emit('message', messageQueue.sent[key]);
    }
  });
});
