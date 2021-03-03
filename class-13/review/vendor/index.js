'use strict';

const io = require('socket.io-client');
const faker = require('faker');

const socket = io.connect('http://localhost:3000/caps');

const storeName = process.argv[2];

// setInterval(() => {

//   let order = {
//     store: 'Test store',
//     orderId: faker.random.uuid(),
//     customer: `${faker.name.findName()}`,
//   }

//   socket.emit('pickup', order);
// }, 5000);

function createOrder(name) {
  let order = {
    store: name,
    orderId: faker.random.uuid(),
    customer: `${faker.name.findName()}`,
  }

  socket.emit('pickup', order);
}

if (storeName) {
  createOrder(storeName);
}

socket.on('delivered', (payload) => {

  console.log('Thank you!');
  process.exit();
});
