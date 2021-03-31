import { useContext } from 'react';
import { SettingsContext } from '../../context/Settings.js';

function Menu() {

  // subscribe to the context that was set in the parent Provider component
  let context = useContext(SettingsContext);

  return (
    <>
      <h1>{context.title}</h1>
      <h2>{context.twitter}</h2>
    </>
  )
}

export default Menu;
