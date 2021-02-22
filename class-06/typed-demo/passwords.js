'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// encoding an decoding
let username = 'Jacob';
let password = 'secret';

// encode both strings seperated by a colon (this makes things easier for the computer)
let encodedString = base64.encode(`${username}:${password}`);

console.log(encodedString);

// typically you create a header for your reques contiaing the encoded string

// POST /auth 
// header: { Authorization: `Basic SmFjb2I6YWRtaW4=`}
let authHeader = { Authorization: 'Basic SmFjb2I6YWRtaW4=' }

// On the server

let authString = authHeader.Authorization.split(' ')[1];
let decodedString = base64.decode(authString);

console.log(decodedString);

let decodedPassword = decodedString.split(':')[1];

// As soon as possible we are going to encrypt
encrypt(decodedPassword, 5).then(hash => {
  compare('wrong', hash);
});

// We use this whenever a user 'Signs Up'
//  Right after we encrypt we store the result in our database.
async function encrypt(stringToEncrypt, complexity) {

  // takes the string to encrypt, number to represent complexity.
  let hashed = await bcrypt.hash(stringToEncrypt, complexity);

  console.log(hashed);
  return hashed;
}

// we don't actually get that information, but we can re-encrypt something to compare if the process procduces an expected output.

// We use everytime a User `'Signs in'
//  Let's find our user and Compare by Username, and compare their password.
async function compare(stringToCompare, hash) {

  let isValid = await bcrypt.compare(stringToCompare, hash);

  console.log(isValid);
}

