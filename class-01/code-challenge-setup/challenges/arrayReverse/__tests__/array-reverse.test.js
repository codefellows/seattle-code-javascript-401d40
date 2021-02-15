'use strict';

const arrayReverse = require('../array-reverse.js');

describe('testing the array reverse module', () => {
  it('should return an array with reversed elements', () => {
    const reversedArray = arrayReverse([1, 2, 3, 4, 5, 6]);

    expect(reversedArray).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
