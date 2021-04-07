import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './todos.js';

// import thunk from './middleware/thunk.js';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  todos: todoReducer
});

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
