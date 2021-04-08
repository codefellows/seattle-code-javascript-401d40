import './App.css';

import { Provider } from 'react-redux';
import store from './store-toolkit/index.js';

import Pokemon from './components/pokemon/Pokemon.js';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Pokemon />
      </Provider>
    </div>
  );
}

export default App;
