import axios from 'axios';

let initialState = [
  { name: 'Jacob' }
]

function pokemonReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      return [...state, { name: payload }];
    case "REMOVE":
      return state.filter(pokemon => pokemon.name !== action.payload);
    default:
      return state;
  }
}

export default pokemonReducer;

export const add = (name) => {
  return {
    type: 'ADD',
    payload: name
  }
}

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload: name
  }
}

export const get = () => async (dispatch) => {
  let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  let data = response.data;
  data.results.forEach(pokemon => dispatch(add(pokemon.name)));
}
