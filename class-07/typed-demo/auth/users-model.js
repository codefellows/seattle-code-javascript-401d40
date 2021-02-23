'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});


// automatically hashes the password whenever we 'save'  a new password
usersSchema.pre('save', async function () {
  // this will refer to the instance being made
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

// Static methods belong to the constructor, not the instance that the constructor creates
usersSchema.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username: username });
  console.log(username, password, user);

  const valid = await bcrypt.compare(password, user.password);
  console.log(user, valid);
  if (valid) {
    return user;
  } else {
    throw new Error('User Validation Error');
  }

}

usersSchema.static.authenticateBearer = function () {

  // if a user presents a token, we can create a new one!

}

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
