'use strict';

const io = require('socket.io-client');

const capsURL = 'http://localhost:3000/caps';


const socket = io.connect(capsURL);


socket.emit('getAll');

socket.on('pickup', (payload) => {

  setTimeout(() => {
    socket.emit('received', payload);
    console.log(`Picking up ${payload.order.orderId}`);
    payload.event = 'in-transit';
    socket.emit('in-transit', payload);
  }, 1500);

});

socket.on('in-transit', (payload) => {
  
  setTimeout(() => {
    socket.emit('received', payload);
    payload.event = 'delivered';
    socket.emit('delivered', payload);
  }, 3000);

});