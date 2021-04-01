'use strict';

class Node {
  constructor(value, size = 20) {
    this.value = value;
    this.children = new Array(size);
  }
}

module.exports = Node;
