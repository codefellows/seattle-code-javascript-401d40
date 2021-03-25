import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      heading: 'Home',
    }
  }

  render() {
    return (
      <div className="home-view">
        <h1>{this.state.heading}</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Home;
