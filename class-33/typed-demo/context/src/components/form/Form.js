import React from 'react';

import { ThemeContext } from '../../context/Theme.js';
import { SettingsContext } from '../../context/Settings.js';


class Form extends React.Component {

  // this perfroms some magic for us, but only for one contextType.
  // static contextType = SettingsContext;

  handleSubmit = (e, settings) => {
    e.preventDefault();
    let { value } = e.target.twitter;
    console.log(value);
    settings.changeTwitter(value);
  }

  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {theme => (
            <>
              <h2 className={`form ${theme.mode}`}>Form Component</h2>
              <button onClick={theme.toggleMode}>Toggle Mode</button>
            </>
          )}
        </ThemeContext.Consumer>
        <SettingsContext.Consumer>
          {settings => (
            <form onSubmit={(e) => this.handleSubmit(e, settings)}>
              <input type="text" name="twitter" />
              <button type="submit">Change Twitter</button>
            </form>
          )}
        </SettingsContext.Consumer>
      </>
    )
  }
}

export default Form;
