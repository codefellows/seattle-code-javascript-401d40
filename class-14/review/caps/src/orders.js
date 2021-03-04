'use strict';

class Order {
  constructor() {
    this.db = [];
  }

  //storeName, orderId, customerName, address
  create(storeName, orderId, customerName, address) {
    let invoice = { storeName, orderId, customerName, address };
    this.db.push(invoice);
    return invoice;
  }
}

module.exports = Order;