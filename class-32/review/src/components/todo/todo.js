import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

// class ToDo extends React.Component {
const ToDo = () => {

  // This used to be setting state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }

  // We dont' this to setState because our component no longer needs to know what `this` is, because we are not a class.
  const [list, setList] = useState([]); // now we use a `setter` that the useState function returns as a second item in a tuple.
  // The argument passed into useState becomes our initial state.
  // `list` is our getter, whose value is the an emtpy array (right now).
  // the getter => represents the value state.

  const _addItem = (item) => {
    item._id = Math.random(); // returns a number betwee 0 and 1, excludes both 1 and 0.
    item.complete = false;
    // cant use this any longer
    // this.setState({ list: [...this.state.list, item] });
    setList([...list, item]);
  };

  const _toggleComplete = id => {

    // let item = this.state.list.filter(i => i._id === id)[0] || {};
    let item = list.filter(i => i._id === id)[0] || {};


    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      // this.setState({ list: newList });
      setList(newList);
    }

  };

  // lifecyle method, this runs before we render, right after React puts this code into the DOM.
  // componentDidMount() {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
  //   ];

  //   this.setState({ list });
  // }

  // do something before mount
  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  }, []); // dependency array.  Anything we put in the array, our component will re-render when that value on update.

  // render() {
  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
  // }
}

export default ToDo;
