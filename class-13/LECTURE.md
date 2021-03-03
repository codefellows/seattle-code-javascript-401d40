# Class 13: Messaging Queue(ish)

## Warm Up

- Creating an Order Queue System.

- Nick M's group
  - Have our Node wrap up an order.
- Jason Q
  - You can calculate this dynamically calculate if you have a reference to something in the `OrderQueue`.

```javascript

// A fancy Queue
class Orderqueue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  placeOrder(details) {
    let newOrder = new Order(details, this);

    this.enqueue(newOrder);
  }

  enqueue() {}

  dequeue() {}
}


// a fancy Node
class Order {
  constructor(details, queue) {
    this.details = details;
    this.next = null;
    this.status = () => {
      let position = this.getposition();
      return `There are ${position} order(s) ahead of you.  Appoximately ${position * 10} minute wait time.`
    };
    // this is a reference to the original Queue, and it's properties will change when we mutate it.
    this.queue = queue;
  }

  getPosition() {

    // traverse this.queue and look for ourselves
    let current = this.queue.front;
    let position = 0;

    while(current.details !== this.details) {
      position ++;
      current = current.next;
    }

    return position;
  }
}


```

## Code Review

- Servifying our event system.
- Hub Server to subscribe to client events.
- Driver responds to pickup events, and emits in-transit and delivered events.
- Vendor create pickups, confirm their delivery.
- How can we achieve this with Socket.io??
  - Jason D
    - 2 Clients and 1 Server
      - Dependencies:
        - Server uses `socket.io`
          - manages the event emissions.
            - It knows who is connected (connections are known as sockets)
        - client use `socket.io-client`
          - connect to the server
          - Once connected events can be emitted
          - And events can be subcribed to.

## Queue System with Socket.io

- We would love to garauntee that our client recevice their paylaods!
  - We are going to implement a simple Messaging Queue that can process
    - sent messages
    - received message
