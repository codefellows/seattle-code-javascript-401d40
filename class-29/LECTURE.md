# Class 29: Routing with a Router

## Warm Up

* Shredder `.get` method for retrieving a value for a given nested key.
  * Should return undefined or a value.

```javascript

const $$ = {
  get: (object, nestedProperty) => {

    // what is on the object?

    // what is on nestedProperties?

    let propertiesInOrder = nestedProperty.split('.');

    let current = object;

    // iterate thorugh this  to create a statement
    propertiesInOrder.forEach(property => {

      current = current[property];

      console.log(current);

    });
    return current;
  }
}



```

## Code Review

* MSW - where does the server and the component we are testing meet?
* Conditional Rendering?
  * Implementing the <If>
* Let's looks a UML of our application structure going from nested components to conditional rendering.
  * 

## Routing with react-router-dom

- Our URL bar, is an important tool that should directly affect the state of our UI.
  - Tradiationlly different URLs serve different content.
- Adding a library to tie our URL to our application state.

## Accessibility and HTML Semantics

- Semantic  (articel, label, input, ...) HTML elements are prescribed roles by the w3c who maintain the HTML specifications.
  - `aria-roles`: what is the purpose of the element
