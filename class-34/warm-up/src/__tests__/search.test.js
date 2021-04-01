'use strict';

const Book = require('../lib/Book.js');

describe('Testing the Book module', () => {
  it('should be able to search a book for a specified paragraph text', () => {
    let testBook = new Book('My First Book', 10);

    let text1 = "My first text content";
    let text2 = "My second paragraph";

    testBook.addChapter('Title 1');
    testBook.addChapter('A Second Title');
    testBook.addSection('1', 'My First Section');
    testBook.addParagraph('1.1', text1);
    testBook.addParagraph('1.1', text2);

    let first = testBook.search('1.1.1');
    let second = testBook.search('1.1.2');

    expect(first).toEqual(text1);
    expect(second).toEqual(text2);
  });
});
