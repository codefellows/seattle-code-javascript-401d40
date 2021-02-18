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
  },

  // returns a new version of the structure, but with items removed based on the return value of the callback.
  filter: function(arr, callback){

    let array = [];

    for(let i = 0; i < arr.length; i++){

      // condition for when we need to push based on result of callback;
      if (callback(arr[i], i)) {
        array.push(arr[i]);
      }

    }

    return array;
  }
}

module.exports = shredder;
