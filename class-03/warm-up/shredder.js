'use strict';

// function shredder(arr, callback) {
  
//   let array = [];

//   for (let i = 0; i < arr.length; i++) {
//     array.push( callback(arr[i], i) );
//   }

//   return array;
// }

const shredder = {
  map: function(arr, callback) {
  
    let array = [];

    for (let i = 0; i < arr.length; i++) {
      array.push( callback(arr[i],i) );
    }

    return array;
  }
}

module.exports = shredder;
