# Class 39: Redux Toolkit

[Interactive Whiteboard](https://projects.invisionapp.com/freehand/document/fI8FuybmO)

## Announcements

* No normal office hours: I'm giving a talk from 4:30 - 5:30.
  * Browser Dev Tools (come check it out if you want to learn about your dev tools and chat about your browser)/
  * Availability from 5:30 - 6:30ish.
* Send a message to your interviewer.

## Warm Up

Templating withe the shredder class:

* `.render` takes a selector for a template, some data to inject into the template, and a selector specifying a target to place render values into.

```javascript

let characters = [
  {name: "Fred", phone: "555-1212" },
  {name: "Wilma", phone: "555-2121" },
  {name: "Betty", phone: "555-1313" },
  {name: "Barney", phone: "555-3131" },
]

characters.forEach( character => {
  // render the people template with the character and append it to the people
  render('#people-template', character, '#people');
});

function render(copy, character, paste) {
  // const template = document.getElementById(copy).firstElementChild('li');
  const template = document.querySelector(copy);
  // template.innerHTML =`${character.name} - ${character.phone}`
  
  let element = template.innerHTML.trim();

  for (let key in character) {
    // let regex = new RegExp('{' + key + '}', 'ig'); // either regex or a string that matches exactly.
    // element = element.replace(regex, character[key]);
    element = element.replace(`{${key}}`, character[key]);
  }
  pasteLocation = document.querySelector(paste);
  pasteLocation.innerHTML += element;
}
```

## Code Review

Using Redux Thunk to make ajax calls.

- How did thunks go for labs?

## Why is Redux so difficult

* Because it doesn't care how you configure your functions as long as t can handle the inputs given by `redux` library.
  * reducer: take in an action?
  * action: Passed into the reducer when inmport application events occur.
* Their is no real opinion about what directories look like, you can define actions anywhere and functions can look very differenet from project to project.

## Redux Toolkit

* Very opinionated, it dictates when things are called and how actions and reducer work together.
  * No longer define your actions
    * Define what the reducer does and a constructor gives you actions.
    * It requires an intial State.
    * It is also preoconfigured with thunk, and other middlewares that are presumed.
