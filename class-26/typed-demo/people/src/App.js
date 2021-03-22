import React from 'react';
import './App.scss';

import Banana from './components/header/Header.js';
import Main from './components/main/Main.js';

// this component is just a function.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Here is a header</header>
//     </div>
//   );
// }

// Classes need to extend the React.Component class from the react library
class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      number: 1,
    }
    // this.number = 1;
  }


  log(num) {
    console.log('Hey from component');
    // in order for this to trigger a re-render we need to call a method passed down from React.Component
    // this makes a re-render is triggered
    this.setState({ number: num + 1 });
  }


  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Banana />
        <div>
          Here is a header
        {/* in order for `this` to refer properly to a react component*/}
          <button onClick={() => this.log(this.state.number)}>Log Something {this.state.number}</button>
        </div>
        <Main />
      </div>
    )
  }
}

export default App;
