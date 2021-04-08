import { configureStore } from '@reduxjs/toolkit';

import pokemonReducer from './pokemon.slice.js';

let reducers = {
  pokemon: pokemonReducer
};

const store = configureStore({ reducer: reducers });

export default store;
