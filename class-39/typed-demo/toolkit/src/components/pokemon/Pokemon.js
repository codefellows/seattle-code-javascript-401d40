import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, get } from '../../store-toolkit/pokemon.slice.js';

export default function Pokemon() {

  let pokemonList = useSelector(state => state.pokemon);
  let dispatch = useDispatch();

  let handleForm = (e) => {
    e.preventDefault();
    dispatch(add(e.target.pokemon.value));
  }

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <div>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map(pokemon => {
          return <li>{pokemon.name}</li>
        })}
      </ul>
      <form onSubmit={handleForm}>
        <input name="pokemon" type='text'></input>
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
  )
}
