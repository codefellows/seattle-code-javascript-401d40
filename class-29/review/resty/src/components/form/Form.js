import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      body: {},
      error: {},
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    let request = await fetch(this.state.url, { method: this.state.method });
    let data = await request.json();

    this.props.handleRequest({
      url: this.state.url,
      method: this.state.method,
      body: data,
      error: null,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>URL
          <input onChange={this.handleChange} type="text" value={this.state.url} name="url" />
        </label><br></br>
        <label >METHOD
          <input onChange={this.handleChange} type="radio" value="GET" name="method" />
          <input onChange={this.handleChange} type="radio" value="POST" name="method" />
          <input onChange={this.handleChange} type="radio" value="PUT" name="method" />
          <input onChange={this.handleChange} type="radio" value="DELETE" name="method" />
        </label><br></br>
        <button type="submit">GO!</button>
      </form>
    )
  }
}

export default Form;
