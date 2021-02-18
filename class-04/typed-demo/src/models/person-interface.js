'use strict';

class PersonInterface {

  // constructor() {
  //   this.id = 0;
  //   this.db = [];
  // }
  constructor(model) {
    this.model = model;
  }

  // read(id) {
  //   if (id) {
  //     for (let i = 0; i < this.db.length; i++) {
  //       if (this.db[i].id === id) {
  //         return this.db[i];
  //       }
  //     }
  //   } else {
  //     return this.db;
  //   }
  // }

  // create(obj) {

  //   let record = {
  //     id: this.id += 1,
  //     data: obj,
  //   }

  //   this.db.push(record);
  //   return record;
  // }

  read(id) {
    if (id) {
      return this.model.find({ _id: id});
    }
    return this.model.find({});
  }

  create(obj) {
    const document = new this.model(obj);
    return document.save();
  }

  update() {

  }

  delete() {

  }
}


module.exports = PersonInterface;
