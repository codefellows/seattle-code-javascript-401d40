'use strict';

const socketio = require('socket.io');

//opens up the server for connections
const io = socketio(3000);

//namespaces
const caps = io.of('/caps');

io.on('connection', (socket) => {

  console.log('New connection created : ' + socket.id);

});

caps.on('connection', (capsSocket) => {

  console.log('New Caps Connection ', capsSocket.id);

  capsSocket.on('pickup', (payload) => {

    console.log('EVENT:', payload);

    capsSocket.broadcast.emit('pickup', payload);
  });

  capsSocket.on('in-transit', (payload) => {
    console.log('EVENT:', payload);
  });


  capsSocket.on('delivered', (payload) => {

    console.log('EVENT:', payload);

    capsSocket.broadcast.emit('delivered', payload);
  });

});
