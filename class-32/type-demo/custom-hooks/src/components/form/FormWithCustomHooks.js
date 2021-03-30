import useForm from '../../hooks/useForm';

function FormWithHooks({ callback }) {

  // our hooks returns 1 getter 2 setters
  let [formValues, handleChange, handleSubmit] = useForm(callback); // each time this is called, there is a new form state.

  // how helpful would this be?
  // let [data, callAPI] = useCallAPI(url, method);

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
