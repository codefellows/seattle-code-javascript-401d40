import React from 'react';
import './form.scss';

// In JS we use: new Form() => <Form />;
class Form extends React.Component {
  // What is a React.Component?
  constructor() {
    super();  // on instantiation, we activate the React.Component abilities.

    // ? Component state => status of our component, any js data that we want our component to care about.
    //   -> any data, data types, structure, that the cocmponent needs to do it's job.
    this.state = {
      apiMethod: [],
      apiUrl: [],
      methodClass: [],
      formGet: 'plain',
      formPost: 'plain',
      formPut: 'plain',
      formDelete: 'plain',
    }
  }

  addUrlAndMethod = () => {
    // ? Think of this as like a 'PUT' on the `this.state` object.
    // updating the `state` object defined in our constructor.
    this.setState({
      apiUrl: [this.state.input, ...this.state.apiUrl],
      apiMethod: [this.state.methodValue, ...this.state.apiMethod],
      methodClass: [this.state.classValue, ...this.state.methodClass],
    });


  }

  // chooseMethod = () => {
  //   this.setState({
  //     apiMethod: 
  //   })
  // }

  // What's up with the e?
  //   we know that this method is being used as an event handler
  //  the e has all the data that was recorded when the event fired.
  handleMethodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
  }

  // this is also handling and event from the 'e'
  // Class switching for colors!
  methodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
    this.setState({ classValue: `${e.target.value}Button` });

    // maybe a callback, maybe a refactor.
    if (e.target.value === 'get') {
      this.setState({
        formGet: 'getButton',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if (e.target.value === 'post') {
      this.setState({
        formGet: 'plain',
        formPost: 'postButton',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if (e.target.value === 'put') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'putButton',
        formDelete: 'plain',
      });
    } else if (e.target.value === 'delete') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'deleteButton',
      });
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }



  render() {
    return (
      // This is what React refers to as JSX.
      <div>
        {/* why curly bracket = this js not jsx */}
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>Enter REST API URL: <br />
            <input className="urlEntry" onChange={this.handleChange} type='text' value={this.state.input} />
          </label>
          <br />
          <label>Choice of Method: <br />
            <button className={this.state.formGet} value="get" onClick={this.methodChange}>GET</button>
            <button className={this.state.formPost} value="post" onClick={this.methodChange}>POST</button>
            <button className={this.state.formPut} value="put" onClick={this.methodChange}>PUT</button>
            <button className={this.state.formDelete} value="delete" onClick={this.methodChange}>DELETE</button>
            <input className="plain goButton" type="submit" value="Go" onClick={this.addUrlAndMethod} />
          </label>
        </form>
        <div className="history-frame">
          <h3 className="history-title">Recent Routes</h3>
          {/* Big nasty one-liner, iterates throuh our this.state.apiURL array using .map and returns a list Items for every url we added to state. */}
          {this.state.apiUrl.map((url, idx) => <li><button className={this.state.methodClass[idx]}>{this.state.apiMethod[idx]}</button> {url}</li>)}
        </div>
      </div>
    )
  }
}


export default Form;
