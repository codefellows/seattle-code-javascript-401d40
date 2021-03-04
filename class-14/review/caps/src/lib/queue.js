'use strict';

class Queue {
  constructor(storeName) {
    this.payload = {
      event: 'pickup',
      time: Date(),
      clientId: storeName,
      messageId: faker.random.uuid(),
      order: {
        orderId: faker.random.uuid(),
        name: faker.name.findName(),
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
      },
    },
  


    subscribe(orderEvent){
      socket.on(orderEvent, )

    }

    trigger(event){

    }

  }
}


const store = process.argv[2];
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
    console.log(`Thank you for delivering ${payload.order.orderId}`);
  }
  
});