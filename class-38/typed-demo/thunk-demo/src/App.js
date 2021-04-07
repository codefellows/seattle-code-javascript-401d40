import { Provider } from 'react-redux';
import store from './store/index.js';
import './App.css'

import Todo from './components/todo/Todo.js';

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
