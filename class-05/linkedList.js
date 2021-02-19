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

  traverse() {
    let current = this.head;

    if (!current) {
      throw new Error('No head!!');
    }

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // We'll talk more about this next week when we discuss 'Stacks'
  recursiveTraverse() {

    // recursive helper function
    let recurse = (node) => {
      let current = node

      if (current) {
        recurse(current);
      }
    }

    recurse(this.head);
  }

  // adds a new node to the last Node in the Linked List
  append(value) {
    let current = this.head;

    while (current) {
      // an infinite loop
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }

    // if we pop out of the loop, we know that we are at end.
    // current.next = new Node(value);
  }
}



const ll = new LinkedList();

ll.head = new Node({ name: 'Jacob' });
// head: (0) => null
ll.head.next = new Node(1);
// head: (0) => (1) => null
ll.head.next.next = new Node(2);
// head: (0) => (1) => (2) => null
ll.head.next.next.next = new Node(3);
// head: (0) => (1) => (2) => (3) =>  null

ll.append(4);
ll.traverse();

