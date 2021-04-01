import { useState } from 'react';

// what does use receive as parameters?
function useForm(callback) {

  const [values, setValues] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value }) // pass the name and value as a newkey value pair
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  }

  return [values, handleChange, handleSubmit];
}

export default useForm;
