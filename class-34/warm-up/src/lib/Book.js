'use strict';

const Tree = require('./Tree.js');
const Chapter = require('./Chapter.js');
const Section = require('./Section.js');
const Glossary = require('./Glossary.js');
const Paragraph = require('./Paragraph.js');

/**
 * TODO: Complete the findParagraph function
 */
class Book extends Tree {
  constructor(title, totalChapters) {
    super(totalChapters);
    this.root = new Glossary(title, this.k);
  }

  addChapter(title) {
    for (let i = 0; i < this.root.children.length; i++) {
      if (!this.root.children[i]) {
        this.root.children[i] = new Chapter(i + 1, title);
        break;
      }
    }
  }

  addSection(index, title) {

    let [chapterIndex] = index.split('.');

    let chapter = this.root.children[chapterIndex - 1];
    for (let i = 0; i < chapter.children.length; i++) {
      if (!chapter.children[i]) {
        chapter.children[i] = new Section(`${chapterIndex}.${i + 1}`, title);
        break;
      }
    }
  }

  addParagraph(index, text) {

    let [chapterIndex, sectionIndex] = index.split('.');

    let chapter = this.root.children[chapterIndex - 1];
    let section = chapter.children[sectionIndex - 1];
    for (let i = 0; i < section.children.length; i++) {
      if (!section.children[i]) {
        section.children[i] = new Paragraph(`${chapterIndex}.${sectionIndex}.${i + 1}`, text);
        break;
      }
    }
  }

  // searches our book for a paragraph based on he index provided ex: `1.1.1` => chapter 1, section 1, paragraph 1
  findParagraph(index) {

  }
}

module.exports = Book;
