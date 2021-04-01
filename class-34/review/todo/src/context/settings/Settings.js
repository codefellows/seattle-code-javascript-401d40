import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  // makes each of these a useState('')
  const state = {
    displayCompletedItems: true,
    itemsPerPage: 5,
    sortBy: 'not completed',
    startingPage: 1,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
