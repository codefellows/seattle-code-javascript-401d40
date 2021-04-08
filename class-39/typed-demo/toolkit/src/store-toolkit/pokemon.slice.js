import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: [
    { name: 'Jacob' }
  ],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter(pokemon => pokemon.name !== action.payload);
    }
  }
});

export const { add, remove } = pokemonSlice.actions;

export const get = () => async (dispatch) => {
  let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  let data = response.data;
  data.results.forEach(pokemon => dispatch(add(pokemon.name)));
}

export default pokemonSlice.reducer;
