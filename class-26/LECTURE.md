# Class 26: Component Based UI and React

## Announcements

- Fresh start to the second half.
- All front end focused.
  - Mainly for the Web.
  - Native Mobile UI towards the end.
- Whiteboard final.
  - Administered by another instructor.
  - Focus a little more on whiteboard material.

## Warm Up

- Turning an array of Numbers into a BST.
  - How do we start?
    - Jason Q
      - Inserting a node into a binary search tree:
        - instantiate a tree.
        - traversing the tree.
          - do we want to do this recursively?
        - create new Nodes.
          - How can we change node left and right references.
          - Do we need a temp node?
      - Iterate through the array:
        - Compare value in the array with value a node (Current Node).

## Sass

- This is a superset of CSS code
  - There is a compilation process for scss / sass
    - The code is transformed from one syntax to another.
  - All of the CSS we've been writing is still valid Sass.
  - Adds a number of features to our CSS syntax
    - Nested style blocks
      - Alows nested curly brackets within other curly brackets
    - Variables
      - let's us add semantics to our styling rules
        - `#c26fhs6` this means nothing to me.
        - `$dark_background: #c26fhs6`
        - Now we can use `$dark_background` anywhere in our scss file to represent the color definition.
    - Mixins
      - define them using `@mixin` decorator

  ```scss

  @mixin dark_background {
    border: none;
    background-color: black;
  }

  main {
    @include dark_background;
  }

  ```

  - Functions
    - Perform operations on in your styling.
    - `@functon` is used to define the function
    - `$` to declare variables
    - allows for operatons o be complete within your styling
      - Don't rely on this a ton, if you are you may want to think about implementing in JS.

  ```scss

  @function half-width($width) {
    $return $width / 2;
  }

  main {
    width: half-width(100%);
  }

  ```

- Sass?
  - Supercharged CSS.
  - Allows for greater functionality.
  - A syntax that needs to be compiled.
    - SCSS => CSS.
- Variables
  - similar to js
  - assign a value, use that value within some styling block.
- Functions
  - Works a lot like js as well!
  - Allow us to perform operations (similar to js operations) within our styling files.
- Mixins
  - Defined piece of styling that is reusable
  - reusable block of styling.
- Nested Blocks
  - lets us select children via parents and sibling relationships.
    - helps with defining styling **heirachy** based on where elements live in our markup.

## Component Based UI

- Think about your elements as pieces of a larger picture
  - Each piece should be atomic
    - self contained.
    - all the functionality, content, styling should be defined within what makes that component special.
    - If there are other considerations, those own component definition.
  - 

## What is react?  How does it work?

- A library / Framework
  - React wants you think of it as a library
  - It's really a Framework for defining UI elementsand their discreet logic.
- The syntax is strange (JSX), it's a combination of HML and JS
- React components are either: js class or a function
  - classes need a render method that returns jsx => HTML
  - functions just need to return JSX.

```jsx

// this syntax needs transpiling / compiling in order to run in the brower.
class Header {
  constructor() {}

  submitform() {

  }

  render() {
    // this needs to be dealt.
    <header>
      <h1>My first react component.</h1>
    </header>
  }
}

```

- We can install our react application with `create-react-app app-name --use-npm`

### Review

- What is React?
  - A JS framework for defining UI elements.
    - Could be for web
    - Often for mobile.
- What is a UI component (according to React?)
  - section of HTMLish thing.
    - this also includes other components that are children of the "current" component.
  - data / js logic.
  - styling considerations.
- What needs to happen to components before they can be viewed in the Browser?
  - They need to be transpiled.
    - need to turn our jsx (the HTMLish thing) and convert that to proper JS.
