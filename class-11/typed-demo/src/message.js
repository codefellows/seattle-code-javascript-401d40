'use strict';

class Message {
  constructor() {
    this.db = [];
  }

  create(text, sender, receiver) {
    let entry = {
      text,
      sender,
      receiver,
    };
    this.db.push(entry);
    return entry;
  }
}

module.exports = Message;
