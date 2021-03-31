'use strict';

const Tree = require('../lib/Tree.js');
const Node = require('../lib/Node.js');

describe('testing the tree module', () => {
  const values = [1, 'hello world', 17, { message: 'test' }];

  const test = new Tree(3);
  test.root = new Node(values[0], test.k);
  test.root.children[0] = new Node(values[1], test.k);
  test.root.children[1] = new Node(values[2], test.k);
  test.root.children[2] = new Node(values[3], test.k);

  it('should visit all the values iteratively', () => {

    const spy = jest.fn();

    test.traverseIteratively(spy);

    values.forEach(value => {
      expect(spy).toHaveBeenCalledWith(value);
    });
  });

  it('should  visit all the value recursively', () => {

    const spy = jest.fn();

    test.traverseRecursively(spy);

    values.forEach(value => {
      expect(spy).toHaveBeenCalledWith(value);
    });
  })
});
