import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos } from '../../store/todos.js';

function Todo(props) {

  useEffect(() => {
    props.loadTodos();
  }, []);

  return (
    <>
      <h2>Todos</h2>
      {props.todos.map(todo => {
        return <p>{todo.text}</p>
      })}
    </>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos.data
  }
}

const mapDispatchToProps = {
  loadTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
