import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CategoriesReducer from './categories.js';
import ProductsReducer from './products.js';
import CartReducer from './cart.js';

const reducers = combineReducers({ categories: CategoriesReducer, products: ProductsReducer, cart: CartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;
