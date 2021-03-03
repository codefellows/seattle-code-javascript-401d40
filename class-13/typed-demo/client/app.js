'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000/chat');

socket.emit('getMessages');

setInterval(() => {
  socket.emit('message', {
    messageId: faker.random.uuid(),
    text: faker.random.words(),
  });
}, 3000);

socket.on('message', payload => {

  console.log(payload);
  socket.emit('received', payload);
});


