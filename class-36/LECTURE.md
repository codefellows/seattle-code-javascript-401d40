# Class 36: Intro to Redux

## Announcements

* Second half instructor: check in with all of you this week!
* Whiteboard are beginning very soon.
  * I will schdule them for you
  * I won't be giving the exam, another code fellows instructor will.

## Warm Up

Traversing both Linked Lists and Binary Trees.

* Linked List

```js

// This should a valid linked list.
function traverse() {

  let current = this.head; // the beginning of our linked list

  while(current){ // while current is a truthy value
    console.log(current.value);
    current = current.next; // move current to the next value ( we want current.next to be null at some point);
  }
}

```

* Binary Tree!!

```js

function traverse() {
    if(!this.root){ // make sure there is a value a the beginning of the tree.
      return null;
    }

    let current = this.root; // set a variable to represent the current node (start at the root)
    let array = []; // storage of traversed values / node
    let queue = []; // this will give us a Breadth first traversal

    queue.push(current);

    while(queue.length) { // while our queue has nodes...
      current = queue.pop(); // grab a node off of the queue.
      array.push(current); // push into return value
      if(current.left){
        queue.unshift(current.left);
      }
      if(current.right) {
        queue.unshift(current.right);
      }
    }
    return array; // return our array of visited nodes.
  }

```

## Global Application State

* As our application scales, we may need 'better' way to control our Global application state.
* 3 things that Redux uses to manage global state:
  * State: Some object that starts with a shape defined by you(the developer)
  * Reducer: a function tha runs everytime state needs to be updated, and always returns the new state of our application.
  * Action / actions: object literals that tell the reducer 'what' is being to the app, and any data required for the update.
    * Actions are used by our React components to modify state.


## Redux Library

- The hardest part about redux is hooking the pieces togther (actions, state, and reducer);
  - We need to tell our app what state looks like via some fancy library code.

## Material UI
