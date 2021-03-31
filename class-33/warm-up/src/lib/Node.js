'use strict';

class Node {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size);
  }
}

module.exports = Node;
