import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './component/home/Home.js';

function App() {
  return (
    <div className="App" role="application">
      <BrowserRouter>
        <nav>
          <NavLink activeClassName="selected" to="/" >Home</NavLink>
          <NavLink activeClassName="selected" to="/about" >About</NavLink>
        </nav>
        <Switch>
          {/* Since both of start with a '/' both render */}
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
