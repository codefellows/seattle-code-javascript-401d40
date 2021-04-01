# Class 34: Login and Auth Components

## Warm Up

Finding a Paragraph in a Book whose contents are stored in a tree.

* How can we search for chapters, sections, and paragraphs?

```javascript
// james and Seid

function findParagraph(index) {

  // grab all the relevant data off of the 
  let [chapterIndex, sectionIndex, paragraphIndex] = index.split('.'); // 1.1.1 => [1,1,1];

  // this should pass our tests
  return this.children[chapterIndex - 1].chidren[sectionIndex - 1].children[paragraphIndex - 1].value; // big O: 0(1);
}

```

## Code Review

* Hooks
  * useForm:  should be able to provide form data and functions for forms to use.
  * useAjax: should be able to provide a function that can easily make requests and update a response object.
* Context: Settings how  many todos items are displayed, filters for complete/ incomplete todo items.

## Authentication / Authorization with React

Authentication and Authorization occur on the backend, but we can reflect that status on the front end.  Is the current user logged in?  What are the current Users capabilities.

### Login Component

### Auth Component
