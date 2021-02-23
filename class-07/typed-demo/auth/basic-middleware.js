'use strict';

const Users = require('./users-model.js');
const base64 = require('base-64');

module.exports = async (req, res, next) => {

  let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  try {

    // authentication of the user
    const validUser = await Users.authenticateBasic(username, password);

    if (validUser) {
      req.user = validUser;
      next();
    }
    else {
      next('Invalid User');
    }
  } catch (error) {
    next('Invalid Login');
  }

};
