import './App.css';

import SettingsProvider from './context/Settings.js';
import ThemeProvider from './context/Theme.js';
import Layout from './components/layout/Layout.js';
import Form from './components/form/Form.js';

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <ThemeProvider>
          <Layout>
            <Form />
          </Layout>
        </ThemeProvider>
      </SettingsProvider>
    </div>
  );
}

export default App;
