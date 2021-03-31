import React, { useState } from 'react';

// create the context from react
export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  // define the values that any child component can read.
  let [title, setTitle] = useState('Random Title');
  let [twitter, setTwitter] = useState('@CodeFellows');

  const state = {
    title,
    twitter,
    changeTitle: setTitle,
    changeTwitter: setTwitter,
  }

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
