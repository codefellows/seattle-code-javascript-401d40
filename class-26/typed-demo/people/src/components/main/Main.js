import React from 'react';

//1) define componenent as a class 2) needs to extend React.Component
class Main extends React.Component {

  // 3) define a constructor, run the super() function to get React powers
  constructor() {
    super();
    // create a state object if needed to manage data the component needs
    this.state = {
      people: ['Jacob'],
    }

    // take the special React 'this' that we gained from React.Component and makes sure that is alwaus refers tp react.Component
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson() {
    this.setState({
      people: [...this.state.people, 'Jacob'],
      input: '',
    });
  }

  addPersonWithImplicitBinding = () => {
    this.setState({
      people: [...this.state.people, this.state.input],
    });
  }

  // Just like before in 201, we still get event that need to be examined to retrieve values.
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <ul>
        <p>People</p>
        {this.state.people.map((person) => <li>{person}</li>)}
        <form>
          <input onChange={this.handleChange} type='text' value={this.state.input} />
        </form>
        <button onClick={this.addPersonWithImplicitBinding}>Add Person</button>
      </ul>
    )
  }
}

export default Main;
