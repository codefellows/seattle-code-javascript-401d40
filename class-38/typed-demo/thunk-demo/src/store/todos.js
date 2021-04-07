import axios from 'axios';

let initialState = {
  count: 0,
  data: [],
};

export default function todoReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOAD_TODOS":
      return {
        count: payload.count,
        data: payload.results,
      }
    default:
      return state;
  }
}

// we have to curry this so that ouur middleware catches this and passes our store features into our action creator!
export const loadTodos = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/todo')
    .then(response => {
      dispatch({
        type: 'LOAD_TODOS',
        payload: response.data
      });
    });
}
