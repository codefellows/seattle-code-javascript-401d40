# Class 38: Asynchronous Actions

## Announcements

* Whiteboards have been scheduled: as long  as you are putting in effort we will offer a retake.
* Next week: let me know if there are topics ( within JS ) that you would like to learn about!
  * Typescript: js with types!

## Warm Up

Traverse a BST and return the first pair that sum to a given integer.

## Code Review

* Adding a cart feature to our storefronts
  * Add another slice of global to manage.
  * Create a reducer for each set of state data.
    * Combine Reducers function from redux?
      * Nick M: allows us to categorize or state so that each reducer only talks to a sub-category of state.

```javascript

let state = {
  cart: [],
  categories: [],
  products: []
}

// this function: updates state and returns a nested Object {}
let appReducer = () => {
  return  {cart: [], categories: [], products: []}
}

//  once we add combine Reducers:
let cartReducer = () => {
  return [];
}
let categoriesReducer = () => {
  return [];
}
let productsReducer = () => {
  return [];
}

```

## Async Actions

* Async does not work within an regular action.
  * Middleware allows us to perform something before an action hits the reducer:
  * When we configure our index.js in our `store` we have a chance to add things.

`import {applyMiddleware} from 'redux'

* `applyMiddleware` recieves any function to run before an action hits the reducers.

## Redux Thunk

* a way to postpone a redux action.
* this will be the middleware applied to our redux store.
* middleware in general requires currying, because redux uses a lot functiono currying to pass values around it various systems.

```javascript

// 3 times curried function
const thunk = store => next => action => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
}

``
