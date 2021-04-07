let initialState = {
  cart: [],
  cartCount: 0,
};
let cart;
let changeCount;


export default function CartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":

      let cartArray = [...state.cart];
      let newItem = payload;

      let itemExists = false;

      for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].name === newItem.name) {
          itemExists = true;
          break;
        }
      }

      if (!itemExists) {
        newItem.inCart = 1;
        newItem.inventory = newItem.inventory - 1;
        cartArray.push(newItem);
        return { cartCount: state.cartCount + 1, cart: cartArray }
      } else {
        cart = state.cart.map(item => {
          if (item.name === payload.name) {
            return { active: item.active, category: item.category, name: item.name, url: item.url, description: item.description, price: item.price, inventory: item.inventory - 1, inCart: item.inCart + 1 };
          }
          return { active: item.active, category: item.category, name: item.name, url: item.url, description: item.description, price: item.price, inventory: item.inventory, inCart: item.inCart };
        });
      }

      return { cartCount: state.cartCount + 1, cart: cart };

    case "REMOVE_FROM_CART":

      let removeArray = [...state.cart];
      changeCount = state.cartCount - payload.inCart;

      cart = state.cart.map(item => {
        if (item.name === payload.name) {
          let tempRemove = removeArray.indexOf(item);
          removeArray.splice(tempRemove, 1);
        }
        return { active: item.active, category: item.category, name: item.name, url: item.url, description: item.description, price: item.price, inventory: item.inventory, inCart: item.inCart };
      });

      return { cartCount: changeCount, cart: removeArray };

    default:
      return state;
  }

}


export function addToCart(item) {

  return {
    type: "ADD_TO_CART",
    payload: item,
  }
}

export function removeFromCart(item) {

  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  }
}
