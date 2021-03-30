import { useState } from 'react';
import './App.css';
// import Form from './components/form/FormWithHooks.js';
import Form from './components/form/FormWithCustomHooks.js';

function App() {

  let [food, setFood] = useState([]);

  const addFood = (item) => {
    setFood([...food, item]);
  }

  return (
    <div className="App">
      {food.map(foodItem => JSON.stringify(foodItem))}
      <Form callback={addFood} />
    </div>
  );
}

export default App;
