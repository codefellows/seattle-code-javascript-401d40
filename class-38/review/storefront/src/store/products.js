let initialState = {
  products: [
    {
      active: true,
      category: 'food',
      name: 'Taco',
      url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80',
      description: 'Mexican hand-food',
      price: 2.50,
      inventory: 100,
      inCart: 0,
    },
    {
      active: true,
      category: 'food',
      name: 'Pizza',
      url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
      description: 'Italian hand-food',
      price: 3.50,
      inventory: 100,
      inCart: 0,
    },
    {
      active: true,
      category: 'food',
      name: 'Hamburger',
      url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
      description: 'American hand-food',
      price: 4.75,
      inventory: 100,
      inCart: 0,
    },
    {
      active: true,
      category: 'food',
      name: 'Chips',
      url: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Snacky hand-food',
      price: 1.25,
      inventory: 100,
      inCart: 0,
    },
    {
      active: true,
      category: 'food',
      name: 'Cookies',
      url: 'https://images.unsplash.com/photo-1571165841024-2ce92069301d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Dessert hand-food',
      price: 2.00,
      inventory: 100,
      inCart: 0,
    },
    {
      active: true,
      category: 'electronics',
      name: 'Mouse',
      url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
      description: 'Almost always better than a trackpad',
      price: 60.00,
      inventory: 20,
      inCart: 0,
    },
    {
      active: true,
      category: 'electronics',
      name: 'Monitor',
      url: 'https://images.unsplash.com/photo-1578091879915-33ee869e2cd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1464&q=80',
      description: 'Display for a computer',
      price: 320.00,
      inventory: 6,
      inCart: 0,
    },
    {
      active: true,
      category: 'electronics',
      name: 'Keyboard',
      url: 'https://images.unsplash.com/photo-1567924675637-283a6742993e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
      description: 'Instrument of data entry',
      price: 180.00,
      inventory: 12,
      inCart: 0,
    },
    {
      active: true,
      category: 'electronics',
      name: 'Headset',
      url: 'https://images.unsplash.com/photo-1575975243243-5462a2054ed2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
      description: 'Computer communications equipment',
      price: 80.00,
      inventory: 20,
      inCart: 0,
    },
    {
      active: true,
      category: 'electronics',
      name: 'Camera',
      url: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
      description: 'For images and/or video',
      price: 40.00,
      inventory: 20,
      inCart: 0,
    },
  ]
}
let products;

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":

      products = state.products.map(product => {
        if (product.category === payload || payload === 'all') {
          return { active: true, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory, inCart: product.inCart };
        }
        return { active: false, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory, inCart: product.inCart };
      });

      return { products: products };

    case "ADD_TO_CART":

      products = state.products.map(product => {
        if (product.name === payload.name) {
          return { active: product.active, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory - 1, inCart: product.inCart + 1 };
        }
        return { active: product.active, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory, inCart: product.inCart };
      });

      return { products: products };

    case "REMOVE_FROM_CART":

      products = state.products.map(product => {
        if (product.name === payload.name) {
          return { active: product.active, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory + payload.inCart, inCart: 0 };
        }
        return { active: product.active, category: product.category, name: product.name, url: product.url, description: product.description, price: product.price, inventory: product.inventory, inCart: product.inCart };
      });


      return { products: products };

    default:
      return state;
  }
}

// reducers expect an object to be returned
// how can we get something like his to be performed by Redux?
//   middleware
// let fetchProducts = async () => {
//   let data = await superagent.get(API_URL);
//   return {
//     type: 'LOAD_PRODUCTS',
//     payload: data.results,
//   }
// }
