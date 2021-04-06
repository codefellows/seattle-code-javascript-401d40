const initialState = {
  activeCategory: '',
  activeDescription: '',
  categoryList: [
    {
      _id: '5f0cdc15acac790017fc26ce',
      name: 'Food',
      description: 'Stuff for you to eat',
    },
    {
      _id: '5f0cdc25acac790017fc26cf',
      name: 'Electronics',
      description: 'Making your life easier, one volt at a time',
    }
  ]
}

export default function categoryReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE':
      return {...state, activeCategory: payload.category, activeDescription: payload.description};
    default:
      return state;
  }
}

export function inactive() {
  return {
    type: 'INACTIVE'
  };
}

export function active(category, description) {
  return {
    type: 'ACTIVE',
    payload: {
      category,
      description
    }
  };
}