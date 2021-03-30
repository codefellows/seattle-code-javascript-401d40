import { useState } from 'react';


function FormWithHooks({ callback }) {

  // all of this, from use state and all our event handlers are used in any form
  const [values, setValue] = useState({});

  // something that runs everytime we change an input
  const handleChange = (e) => {

    // let name = e.target.name;
    // let value = e.target.value;
    let { name, value } = e.target;
    setValue({ ...values, [name]: value });
  }

  // something to run everytime we submit our form
  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  }

  return (
    <div>
      <h2>Food Form</h2>
      <form onSubmit={handleSubmit}>
        <input name="food" type="text" onChange={handleChange} />
        <input name="calories" type="text" onChange={handleChange} />
        <button type="submit">Add food</button>
      </form>
    </div>
  )
}

export default FormWithHooks;
