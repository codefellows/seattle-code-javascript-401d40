import './App.css';
import AuthProvider from './context/AuthProvider.js';
import Login from './components/auth/Login.js';
import Auth from './components/auth/Auth.js';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
        <Auth capability="read">
          <p>You are authorized!!</p>
        </Auth>
      </AuthProvider>
    </div>
  );
}

export default App;
