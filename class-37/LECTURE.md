# Class 37: Multiple Reducers

## Announcements

* Whiteboards starting this week (fingers crossed)

## Warm Up

* Extending the shredder class with `.get` method

```javascript

// James and Jason D.
class Shredder {
  
  async apiGet(api) {

    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log(request.responseText);
          return request.responseText;
        } else {
          console.error('An error occurred during your request: ' + request.status + ' ' + request.statusText);
          return new Error('Request error: ', request.status, request.statusText);
        }
      }
    }
    request.open('get', api);
    request.send();
  }
}

// Refactor with promises
class Shredder {
  
  apiGet(api) {
    const request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(request.responseText);
          } else {
            reject('An error occurred during your request: ' + request.status + ' ' + request.statusText);
          }
        }
      }
      request.open('get', api);
      request.send();

    });
  }
}


const shred = new Shredder();
shred.apiGet('https://pokeapi.co/api/v2/pokemon')
  .then(data => {
    console.log(data);
  })
  .catch(e => console.error(e));

```

## Code Review

* Implementing Redux into a storefront application.
* Redux review
  * 3 things that redux needs:
    * 1) State: properties and data that our app needs.
    * 2) Reducer: function that runs everyime state needs to be updated
    * 3) Actions: Objects that is passed into the reducer to tell it what needs to be updated.
    * Configure the store in an store/index.js file
      * combine reducers into a single `state` with a `reducer`

How do we filter by category?
 * activeCategory: dictates what categories should be rendered?
   * `electronics` vs `food`
Dispathing Actions?

Changing MUI styles!!
* Demo this
  * useStyle / makeStyle hooks.


## Combine Reducers

It is diffcult to manage states that are deeply nested, so redux gives us `combineReducers` to let us define more precisely what our  initial state will look like.
  * let's our reducer logic control parts of initial state, instead of needing to know what all of state should looke like.
  * Each action executes every reducer that is defined.
    * include a default case with every reducer to return state as it was before the action was used.
