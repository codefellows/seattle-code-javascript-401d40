import './App.css';
import { Provider } from 'react-redux';
import Candidates from './components/candidates/Candidates.js';
import Votes from './components/votes/Votes.js';

import store from './store/index.js';

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <Candidates />
        <Votes />
      </Provider>
    </div>
  );
}

export default App;
