// 1) The State of our Votes data
let initialState = {
  candidates: [
    { name: "Bob", votes: 0 },
    { name: "Mary", votes: 0 },
    { name: "Jamie", votes: 0 }
  ],
  total: 0,
}
let totalVotes;
let candidates;

// 2) Reducer
// our function that tells our store what happened and what needs to change
export default function VotesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_ONE_TO_VOTES":

      totalVotes = state.total + 1;
      candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate
      });

      return { total: totalVotes, candidates: candidates }
    case "SUBRTACT_ONE_FROM_VOES":

      totalVotes = state.total - 1;
      candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes - 1 }
        }
        return candidate;
      });

      return { total: totalVotes, candidates: candidates }
    default:
      return state;
  }
}

// 3)
/// these functions are used within a react component
export function incrementAction(name) {
  return {
    type: "ADD_ONE_TO_VOTES",
    payload: name,
  }
}

export function decrementAction(name) {
  return {
    type: "SUBRTACT_ONE_FROM_VOES",
    payload: name,
  }
}
