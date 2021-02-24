'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'writer', 'editor', 'admin'] }
}, { toJSON: { virtuals: true } });

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

userSchema.virtual('token').get(function () {
  let tokenPayload = {
    _id: this._id,
    username: this.username
  }

  return jwt.sign(tokenPayload, 'secret');
});

userSchema.virtual('capabilities').get(function () {
  let accessControl = {
    user: ['read'],
    writer: ['read', 'write'],
    editor: ['read', 'update'],
    admin: ['read', 'write', 'update', 'delete']
  }

  return accessControl[this.role];
});

userSchema.statics.authenticateToken = async function (token) {

  const validUser = jwt.verify(token, 'secret');
  const user = await this.findOne({ username: validUser.username });
  if (user) {
    return user;
  } else {
    throw new Error('authentication error');
  }

}

module.exports = mongoose.model('users', userSchema);
