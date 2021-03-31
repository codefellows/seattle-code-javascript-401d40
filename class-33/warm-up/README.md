# Warm Up - Tree Traversals

Visit all Node within a tree using both an iterative and recursive approach.

## Overview

Complete the provided class methods to pass the included test files.  The k-ary `Tree` class needs to be able to traverse using 2 seperate traversal methods.

* Complete the `traverseIteratively` method located in `./src/lib/Tree.js`  this method should iterate through all the Nodes in the tree and pass their value into a callback function provided as a parameter.
* Complete the `traverseRecursively` method located in `./src/lib/Tree.js` which should visit each node in the tree using a recursive method and pass their value into a callcack function provided as a parameter.
* Run `npm test` to check if your methods traverse properly.

## Sample Inputs and outputs

```js

const test = new Tree(3);
test.root = new Node(10, test.k);
test.root.children[0] = new Node(12, test.k);
test.root.children[1] = new Node('string', test.k);
test.root.children[2] = new Node({type: 'object'}, test.k);

text.traverseIteratively(console.log) // log to the console => 10, 12, 'string', {type: "object"}

text.traverseIteratively(console.log) // log to the console => 10, 12, 'string', {type: "object"}

```
