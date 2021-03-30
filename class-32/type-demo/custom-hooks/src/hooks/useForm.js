import { useState } from 'react';

// Form functionality that  is useful to any form

//  hooks are just functions, no return of jsx
const useForm = (callback) => { // param `callback` = what should be done when the form is complete and ready to submit.

  const [values, setValue] = useState({}); // we need our own state, so that new forms can manage different values.

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValue({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  }

  return [
    values,
    handleChange,
    handleSubmit
  ]
}

export default useForm;
