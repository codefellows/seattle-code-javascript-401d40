# Class 05: Linked Lists

What do you think about?

- Java, doing linked lists things
- connection, connected thing.
- a group of objects.
  - a group of things, stuff.

- Think about if javascript didnt have an array, or an object.

```javascript

var something = 0;
var somethingElse = 1;
// how can we group these 2 thiings together.

var array = [0,1,2,3];

```

- This is the problem that linked list try to solve.
  - What is the simplest, performs on behavior task.

## Abstract Data Structures

- Semantics are really important.
  - Semantics is what words mean.

## Terminology

- Linked List: A linear connection of Nodes.
- Node: A piece of data, that sits in a liked list.
  - value: the property of a node that stores information ( number, string, boolean, object ).
  - next: the property of a node that points to another node.
- Singly LL: a linked list whose nodes have only one reference.
  - Only have a reference to the `next` Node.
- Doubly LL: a linked list whose node have 2 references.
  - A reference to `next` and `previous`.
- Head: The beginning of a Linked List. The first Node.
- Current: Node that is currently being looked at.  When traversing a linked list, you typically refer to the current node.
- Traversal: Looking at all the values within a given data structure.

## Questions
- Is an Array a Linked List?
  - No, it is much more!

## Traversal

- A simple Alogithm for traversal:
  - We start at the head, and set the Node as our Current Node
  - We look at the value and process it (console.log the value);
  - Is the current Nodes next value a Node?
    - If it is we should set current to the next Node
    - If not, we know we have reached the end of the Linked List and our traversal is done.
      - return / break.
  - Traversal will always be the every node.
- Analysis of traversal
  - Space: O(1)
  - Time: O(n)

## Big O Notation

- What is Big 0?
  - General analysis, based on the number of inputs your program has.
  - the worst case scenarios for evaluating efficiency.
    - The time is takes for a program or algorithm to complete.
    - The space the program or algorithm needs.
  - As you operations increase, how is this affected the runtime.

let list = [];

for (let item in array) {
  for (let item in array1) {
    list.push(array[item]);
    console.log();
  }
}
new Array(1000) / new Array(10000000000000)

### O(n): linear efficiency

### O(1): constant efficiency.
- Never really take into account, multiplying our coefficient.

### 0(n^2): exponential efficiency
- You are using nested loops (two dimensional operations).

### O(log n): logarithmic efficiency
- You are reducing time / space as you inputs grow.

Time: is literal time is takes to run through a program.
Space: How much memory does your program need to complete.
  - How many variables, reference to other data points are we creating.

## Adding A Node

- Follow the same(ish) pattern as our traversal
  - Start  at  the head, and look at the current Nodes next property.
    - If the next property exists, we assign current node the next node.
    - If not, we create a new Node and assign that to the next property.
- Analysis of efficiency??
  - Time: O(n)
  - Space: O(1)
