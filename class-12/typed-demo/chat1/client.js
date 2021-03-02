'use strict';

const io = require('socket.io-client');
const hostURL = 'http://localhost:3000';
const chatURL = 'http://localhost:3000/chat';

// const socket = io.connect(hostURL);
const chatServer = io.connect(chatURL);

// responding to the 'hi' event
// socket.on('hi', (payload) => {

//   console.log('server says : ', payload);

// });

// sending out an event
// socket.emit('hello', 'Chat 1 says hello');

chatServer.on('message', (payload) => {
  console.log('Message received :', payload);
});

chatServer.emit('message', { clientId: 18381, text: 'Hello from client 1' });

