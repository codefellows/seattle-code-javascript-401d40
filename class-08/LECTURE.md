# Class 08: Authorization, Access Control

## Warm Up

- Calculate Number of unique values is a Linked List.

```javascript

'used strict';

console.log('hello world');

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  
  unqiueVal() {
    // set a current
    let current = this.head;
    let int = this.head.val;

    // set an array which will only be filled with unique values
    const result = [int];

    // const result = {}
    // result[int] = current;
    // const result = {[int]: current}  allows us to use variables as keys

    // loop as long as current is not null
    while (current) {

      // let temp = current

      // another while loop through the linked list, checking for duplicates?

      // if(!result[current.val]) {
        //result[current.val] = current;
      //}
 
      if (!result.includes(current.val)) { // this includes does include a loop within it
        result.push(current.val);
      }

      current = current.next;
    }

    // return length of the array.
    return result.length;
  }
}

// big 0
//  time: O(n^2)
//  space: O(n)

const ll = new LinkedList();
ll.head = new Node(0);
ll.head.next = new Node(3);
ll.head.next.next = new Node(2)
ll.head.next.next.next = new Node(10)
ll.head.next.next.next.next = new Node(15)
ll.head.next.next.next.next.next = new Node(2)
console.log(ll.unqiueVal());

```

## Code Review

- See review folder

## Authorization

- How can we determine who has access to our server resources?
- Role based access control.
  - See diagrams for Authorization features.

## Access Control
