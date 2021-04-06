import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products.js';
import categoryReducer from './categories.js';

const reducers = combineReducers({ categories: categoryReducer, products: productReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;