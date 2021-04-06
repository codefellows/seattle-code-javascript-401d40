let initialState = [
  { name: "Bob", votes: 0 },
  { name: "Mary", votes: 0 },
  { name: "Jamie", votes: 0 }
]

export default function candidatesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state.map(candidate => candidate.name === payload ? { name: candidate.name, votes: candidate.votes + 1 } : candidate);
    case 'DECREMENT':
      return state.map(candidate => candidate.name === payload ? { name: candidate.name, votes: candidate.votes - 1 } : candidate);
    default:
      return state;
  }
}
