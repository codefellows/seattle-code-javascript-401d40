export function increment(person) {
  return {
    type: 'INCREMENT',
    payload: person,
  }
}

export function decrement(person) {
  return {
    type: 'DECREMENT',
    payload: person,
  }
}
