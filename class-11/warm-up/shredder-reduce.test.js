'use strict';

const $$ = {
  // how can we reduce, 3 params: array / object, callback, accumulator
  reduce: function (structure, callback, start) {
    // [1,2,3,4] , (1,2,3) => {logic}, 0;
    structure.forEach((value, idx) => {
      start = callback(start, value, idx);
    }); //callback(1) -> callback(2) !=> callback(start, )
    // accumulator = accumulator + val;
    return start;
  },
}

describe('testing the shredder library', () => {

  it('should sum up numbers in an array', () => {

    let array = [1, 2, 3, 4];
    let sum = $$.reduce(array, (accumulator, val, idx) => {
      accumulator = accumulator + val;
      return accumulator;
    }, 0);

    expect(sum).toEqual(10);
  });
});

