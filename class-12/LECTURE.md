# Class 12: TCP And Socket.io

## Code Review

- Code Challenge: Pseudoqueue.

```javascript

 
class Pseudoqueue() {

  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  
  // jason's code
  enqueue(node) {
    this.rear.push(node);
  }
  dequeue() {
    if (this.front.isEmpty()) {
      while(!this.rear.isEmpty()) {
        this.front.push(this.rear.pop());
      }
    }
    return this.front.pop();
  }

  enqueue(value) {
    // push the new value into our inbox;

    // what do we need manage as we add things to the inbox.
  }

  dequeue() {

    // pop the first thing added off the outbox.

    // is there anythiing we need to manage here as well.
  }

}

```

- Lab: creating modules that respond to each other.
  - Order of console logs.
    - 3 `machines` tha are interacting with one another.
      - Event.js - file that makes the same eventPool available to other files.
        - If we don't do this, some modules couls potentially subscribe to the wrong event pool.
      - hub
        - this brings in the eventPool, and defines and subscribes to the events specified.
        - also logs our event data between 'clients'.
      - vendor
        - generate a fake package and emit an event every 5 seconds.
        - respond to the 'delivery' event, console logs thank you.
      - driver
        - respond to the 'pickup event:
          - emits 2 events after 1 and 3 second intervals

- Events Node Module
  - Built in to Node.
  - Facilitates the creation and listen of 'events'
    - What is an event.
      - some action by a user.
      - some action by automation.
      - Any points of interaction that we define.
- What is a Subscriber: 
  - something that is listening / waiting for a specific event.
  - 'events.on`
    - this is a waiting phase.
- What is a Publisher:
  - something that is sending out / emitting a specific event.

## TCP

- Replacing the Node Events Module with a TCP connection.
  - Transmission Control Protocol?
    - A series of specific actions that dictate how 'packets' are transmitted between computers.
    - Our HTTP connection site on top of a TCP.
      - It's closer to machine code, and HTTP connections start with a TCP connection.
      - Full Duplex: able to send and receive info at the same time
      - Get's intialized with a 3 stage handshake.
    - In JS we interaface with this connection via Web Socket.
      - they are an upgraded HTTP connection, that utilizes the underlying TCP infrastructure.
      - `ws://68.891283:400000`
      - Also full duplex

## Making full duplex connections with Socket.io

- Socket.io utilizes but is much more web socket.
  - feature of socket.io include
    - The event driven features of Node events
    - the full duplex communication of TCP / WebSockets.

- Review
  - What's the difference between TCP and Socket.io?
    - TCP is a protocol: manages our connection, sending and receiving of packets.
      - two way, full duplex
    - socket.io is a library: facilitate the conversation, it's a JS library which is much quicker/easier than establishing a TCP connection of our own.
      - Gives us the ability to name our own events.
  - 2 sides to a connection:
    - client
      - client emitted event
        - specific clients (that are subscribed)
    - server
      - server emitted event
        - Who responds to server emitted events?
          - all clients (that are subscribed to the event)
