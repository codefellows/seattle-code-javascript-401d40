let initialState = {
  cart: [],
}


export default function CartReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] }
    case "REMOVE_FROM_CART":
      let temp = [...state.cart];
      let deleteOneItem = true;
      let updatedCart = temp.filter((item) => {
        if (item === payload && deleteOneItem) {
          deleteOneItem = false;
          return false;
        } else {
          return true;
        }
      })
      return { ...state, cart: [...updatedCart] }
    default:
      return state;
  }
}

export function addToCart(name) {
  return {
    type: "ADD_TO_CART",
    payload: name,
  }
}

export function removeFromCart(name) {
  return {
    type: "REMOVE_FROM_CART",
    payload: name,
  }
}
