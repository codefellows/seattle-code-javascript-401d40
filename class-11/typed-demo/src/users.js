'use strict';

class User {
  constructor() {
    this.db = [];
  }

  create(name) {
    let entry = { name: name };
    this.db.push(entry);
    return entry;
  }
}

module.exports = User;
