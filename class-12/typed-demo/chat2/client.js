'use strict';

const io = require('socket.io-client');
const chatURL = 'http://localhost:3000/chat';

const chatServer = io.connect(chatURL);

chatServer.on('message', (payload) => {
  console.log('Message received :', payload);
});
