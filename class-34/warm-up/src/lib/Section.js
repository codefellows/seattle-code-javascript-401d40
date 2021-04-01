'use strict';

const Node = require('./Node.js');

class Section extends Node {
  constructor(index, heading, numberOfParagraphs) {
    super(heading, numberOfParagraphs);
    this.index = index;
  }
}

module.exports = Section;
