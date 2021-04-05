import './App.css';
import { Provider } from 'react-redux';
import Votes from './components/votes/Votes.js';
import Container from '@material-ui/core/Container';
import store from './store/index.js';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <Provider store={store()}>
        {/* // any component here can subcribe to app state */}
        <Votes />
      </Provider>
    </Container>
  );
}

export default App;
