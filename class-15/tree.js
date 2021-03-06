'use strict';

/**
 * Kary Tree stuff
 */

class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size); // [undefined, undefined, undefined]
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  breadth() {

    let current = null;
    let queue = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      console.log(current.value);

      for (let i = 0; i < current.children.length; i++) {
        if (current.children[i]) {
          queue.unshift(current.children[i]);
        }
      }
    }

  }
}


/**
 * Normal Tree stuff!
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverse() {

    // recusive helper function
    const preOrder = (node) => {

      // 1
      console.log(node.value);

      // 2
      if (node.left) {
        preOrder(node.left);
      }

      // 3
      if (node.right) {
        preOrder(node.right);
      }
    }

    let current = this.root;
    preOrder(current);
  }

  traverseWithStack() {
    let current = this.root;
    let stack = [];
    stack.push(current);

    while (stack.length) {

      console.log(current.value);

      // We've reversed because of how are stack handles order (FiLo).
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }

      current = stack.pop();
    }
  }

  breadth() {

    let current = null;
    let queue = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      console.log(current.value);

      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }
  }
}

const tree = new Tree();

tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25);

// tree.traverse();
// tree.traverseWithStack();
// tree.breadth();

const karyTree = new KaryTree(3);

karyTree.root = new KaryNode(0, karyTree.k);
karyTree.root.children[0] = new KaryNode(1, karyTree.k);
karyTree.root.children[1] = new KaryNode(2, karyTree.k);
karyTree.root.children[2] = new KaryNode(3, karyTree.k);
karyTree.root.children[0].children[0] = new KaryNode(5, karyTree.k);

karyTree.breadth();
