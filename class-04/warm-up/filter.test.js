'use strict';

const $$ = require('./shredder.js');

describe('testing shredder ', () => {
  it('should filter data structures', () => {
    let array = [1,2,3,4];
    let test = $$.filter(array, (value,idx) => {
      return !(value % 2)
    });

    expect(test).toEqual([2,4]);
  })
})
