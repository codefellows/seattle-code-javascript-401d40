import todoReducer from '../store/todos.js';

describe('testing todo reducer function', () => {
  it('should update state using a type and payload', () => {

    let state = {
      count: 0,
      data: [],
    }

    let action = {
      type: 'LOAD_TODOS',
      payload: { count: 1, results: [{ name: 'test' }] }
    }

    expect(todoReducer(state, action)).toEqual({ count: 1, data: [{ name: 'test' }] });
  })
})
