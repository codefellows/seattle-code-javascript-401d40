import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { loadTodos } from '../store/todos.js';

const mockStore = configMockStore([thunk]);

describe('test todo actions', () => {
  it('load todos into the store', () => {

    let store = mockStore({
      count: 0,
      data: [],
    });

    return store.dispatch(loadTodos()).then(() => {
      let dispactchedActions = store.getActions();
      expect(dispactchedActions[0].type).toEqual('LOAD_TODOS');
      expect(dispactchedActions[0].payload.count > 1).toBeTruthy();
    });
  });
})
