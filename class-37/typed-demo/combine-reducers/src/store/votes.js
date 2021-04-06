let initialState = 0;

export default function votesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
