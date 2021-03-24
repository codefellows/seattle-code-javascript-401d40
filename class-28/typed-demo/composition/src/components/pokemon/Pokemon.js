import React from 'react';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: false,
    }
  }

  // the first thing to happen to a component
  async componentDidMount() {
    await this.setState({ isLoading: true });
    // anything that needs to happen before we render can go here.
    let request = await fetch('https://pokeapi.co/api/v2/pokemon/', {
      method: "GET",
    });
    let data = await request.json();

    await this.setState({ list: data.results, isLoading: false });
  }

  //  This will run after a render
  componentDidUpdate() {
    console.log('Im updated');
  }

  componentWillUnmount() {
    console.log('Im going away');
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading</p>
    } else {
      return (
        <div>
          <ul>
            {this.state.list.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
          </ul>
        </div>
      );
    }
  }
}

export default Pokemon;
