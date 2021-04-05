import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import votesReducer from './votes.js';

const reducers = combineReducers({ votes: votesReducer }); // you'll want to add this and add other reducers to this line.

const store = () => {
  return createStore(reducers, composeWithDevTools()); // we pass our reducer(s), and middlewares.
}

export default store;
