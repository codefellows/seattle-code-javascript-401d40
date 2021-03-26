'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    // how can we add to our list?

    // check if the head has a value
    if (this.head === null) {
      this.head = node;
      return;
    }

    // What about a non empty list?

    // traverse the list to find where to add stuff?
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    // how will we know?
    // on the  other of this while loop

    current.next = node;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size); //  this is a more object oriented approach to creating an array in js
    // => [undefined, ....size];
  }

  // Take in a key, return a position within this.buckets
  hash(key) {
    // assume a string is passed, .split is a string method.
    let asciiSum = key.split('') // this gives us ['J', 'a', 'c', 'o', 'b']
      .reduce((acc, char) => {
        return acc + char.charCodeAt(0); // charCodeAt converts string characters into acsii values.
      }, 0);

    return (asciiSum * 599) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key); // the index of our bucket

    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    let data = { [key]: value };
    this.buckets[hash].insert(data);
    // return this.buckets[hash];
  }

  // does our any bucket, contain the key?
  contains(key) {

    let hash = this.hash(key);
    if (this.buckets[hash]) {
      return true;
    } else {
      return false;
    }
    // return !!this.buckets[hash];
  }

  // takes in a key and returns the value
  find(key) {

  }
}

let table = new HashTable(1024);

console.log(table.hash('Jacob'));

table.add('Jacob', 'instructor');
table.add('John', 'test');
table.add('Xena', 'another value');
table.add('johnjacobjingleheimer', 128949834);

console.log(JSON.stringify(table));
