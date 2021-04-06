import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import candidatesReducer from './candidates.js';
import votesReducer from './votes.js';

let reducers = combineReducers({
  candidates: candidatesReducer,
  totalVotes: votesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;
