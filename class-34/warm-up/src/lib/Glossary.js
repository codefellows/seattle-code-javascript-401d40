'use strict';

const Node = require('./Node.js');

class Glossary extends Node {
  constructor(title, totalChapters) {
    super(title, totalChapters);
    this.totalChapters = totalChapters;
  }
}

module.exports = Glossary;
