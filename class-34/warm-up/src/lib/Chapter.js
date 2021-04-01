'use strict';

const Node = require('./Node.js');

class Chapter extends Node {
  constructor(index, title, numberOfSections) {
    super(title, numberOfSections);
    this.index = index;
  }
}

module.exports = Chapter;
