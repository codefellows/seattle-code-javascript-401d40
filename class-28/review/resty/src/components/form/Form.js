import React from 'react';
import './form.scss';


// export default function Form(props) {

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      method: '',
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(this.state.url);
      const data = await request.json();
      const headers = request.headers;
      // let urlData = data.results.map(data => data);
      this.props.updateResults(data, headers);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>URL:
            <input data-testid="input-text" onChange={this.handleChange} className="input-text" type='text' name="url" />
          </label>
          <button type='submit' >GO!</button>
          <p></p>
          <div className="ck-button">
            <label>
              <input type="radio" value="GET" name="method" />
              <span>GET</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="POST" name="method" />
              <span>POST</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="PUT" name="method" />
              <span>PUT</span>
            </label>
          </div>
          <div className="ck-button">
            <label>
              <input type="radio" value="DELETE" name="method" />
              <span>DELETE</span>
            </label>
          </div>
        </form>
      </section>
    );

  }
}

export default Form;
