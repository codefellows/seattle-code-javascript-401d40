'use strict';

const $$ = require('./shredder.js');


describe('Testig the shredder librrary',() => {
  it('should map through an array', () => {

    let array = [1,2,3,4];
    function callback(val,idx) {
      return val * val;
    }

    let test = $$.map(array, callback);
    expect(test).toEqual([1,4,9,16]);
  });
});
