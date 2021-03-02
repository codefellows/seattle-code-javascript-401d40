'use strict';

const socketio = require('socket.io');

// opens up our server for connections
const io = socketio(3000);

// namespaces
const chat = io.of('/chat');

// this is a default event that socket.io maintains
io.on('connection', (socket) => {

  console.log('New connection created :' + socket.id);

  // this is a socket event
  socket.on('hello', (payload) => {
    console.log('Someone said hello :', payload);

    // this is a server event
    io.emit('hi', 'hi there');


    // socket.emit('hi', 'hi there'); // this will only go back to the same client
  });
});

chat.on('connection', (chatSocket) => {

  console.log('New Chat Connection ', chatSocket.id);

  chatSocket.on('message', (payload) => {
    console.log('server gets message ', payload);

    // because of the `broadcast` this is only sending events to sockets that are NOT the sender.
    chatSocket.broadcast.emit('message', payload);
  });

});

