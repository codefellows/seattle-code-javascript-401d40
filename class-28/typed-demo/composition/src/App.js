import React from 'react';
import { If, Else } from './components/if/If.js';
import Modal from './components/modal/Modal.js';
import './App.css';
import Pokemon from './components/pokemon/Pokemon.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuVisible: false,
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleMenu}>toggle menu</button>
        {/* The code below is a little  ugly */}
        {/* {this.state.isMenuVisible ? <div>Menu</div> : null} */}
        <If condition={this.state.isMenuVisible}>
          <p>Show Me!</p>
        </If>
        <Else condition={this.state.isMenuVisible}>
          <p>OR Show Me!</p>
        </Else>
        <Modal show={this.state.isMenuVisible} onClose={this.toggleMenu}>
          <Pokemon />
        </Modal>
      </div>
    );
  }
}

export default App;
