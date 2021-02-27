'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    // check whether our Stack isEmpty
    if (this.isEmpty()) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {

    let temp = this.front;

    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

let stack = new Stack();

let NodeA = new Node('first');
let NodeB = new Node('second');

stack.push(NodeA);

stack.push(NodeB);
console.log(stack);

let top = stack.pop();

// console.log(top);
// console.log(stack);

let queue = new Queue();

queue.enqueue(NodeA);
queue.enqueue(NodeB);
let front = queue.dequeue();
console.log(queue, front);
