import { useState, useEffect } from 'react'; // this is a function;s
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './components/counter/Counter.js';
import People from './components/people/People.js';

function App() {
  // constructor() {
  //   this.state = {
  //     title: ''
  //   }
  // }
  let [title, setTitle] = useState(''); // parameter is the initial value of some piece of state.
  // setTitle('Hooks Demo'); // update title to be whatever is passed in.

  // 1st arg, a function that will run.
  // 2nd arg, an array of values that need to be watched
  //    empty array, runs the first arg function just once.  Same as componentDidMount.
  //    add a property you want useEffect to watch out for in the array, componentDidUpdate.
  //    
  useEffect(() => {
    setTitle('Hooks Demo');
    return () => console.log('component did unmount');
  }, []) // this runs once / many times / no at all depending on its arguments.

  return (
    <div className="App">
      <Counter title={title} setTitle={setTitle} />
      <People />
    </div>
  );
}

export default App;
