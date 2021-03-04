'use strict';


const store = '1-206-flowers';
const faker = require('faker');
const io = require('socket.io-client');
const capsURL = 'http://localhost:3000/caps';

const socket = io.connect(capsURL);

socket.emit('getAll');

setInterval(() => {
  socket.emit('pickup', {
    event: 'pickup',
    time: Date(),
    clientId: store,
    messageId: faker.random.uuid(),
    order: {
      orderId: faker.random.uuid(),
      name: faker.name.findName(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
    },
  });
}, 5000);


socket.on('delivered', (payload) => {

  if(payload.clientId === store){
    socket.emit('received', payload);
    console.log(`Flowers were delivered - ${payload.order.orderId}`);
  }
  
});
