import { useState, useEffect } from 'react';
import './App.css';

import useAjax from './hooks/useAjax.js';

function App() {

  const [request, response] = useAjax();
  const [data, setData] = useState({});


  useEffect(() => {
    request({ url: 'https://api-js401.herokuapp.com/api/v1/todo' });
  }, [request]);

  useEffect(() => {
    setData(response);
  }, [response]);

  const _addItem = () => {
    let options = {
      url: 'https://api-js401.herokuapp.com/api/v1/todo',
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      data: { "text": "some note", "assignee": "jacob", "difficulty": 3 },
    }

    request(options);
  }

  return (
    <div className="App">
      {JSON.stringify(data)};
      <button onClick={(e) => {
        e.preventDefault()
        _addItem();
      }}
      >  Add some item</button>
    </div>
  );
}

export default App;
