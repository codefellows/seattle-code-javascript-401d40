import { useState, useEffect } from 'react';

export default function Counter({ title, setTitle }) {
  let [count, setCount] = useState(0); // returns a getter and a setter for updating the React state itself.


  // reruns everytime items in the dependency array update, title and setTitle
  useEffect(() => {
    console.log('title was updated');
    // console.log('this runs only once');
  }, [title]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
    document.title = e.target.value;
  }

  return (
    <section>
      <h2>Counter Component</h2>
      <input onChange={handleTitle} />
      <p>
        <button onClick={() => setCount(count -= 1)}>-</button>
        {count}
        <button onClick={() => setCount(count += 1)}>+</button>
      </p>
      {
        count % 5 === 0 ?
          <div>
            <p>Count is divisible by 5</p>
          </div>
          : null
      }
    </section>
  )
}
