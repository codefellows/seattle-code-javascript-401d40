
import CartReducer from '../store/cart.js';
import CategoriesReducer from '../store/categories.js';
import ProductsReducer from '../store/products.js';

describe('Testing reducer components', () => {
  it('Should successfully add a product to the cart using CartReducer', () => {
    let product = {
      active: true,
      category: 'food',
      name: 'Taco',
      url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80',
      description: 'Mexican hand-food',
      price: 2.50,
      inventory: 100,
      inCart: 0,
    };

    let initialState = {
  cart: [],
  cartCount: 0,
};

    let newState = CartReducer(initialState, { type:'ADD_TO_CART', payload: product});

    expect(newState.cartCount).toEqual(1);
    expect(newState.cart).toEqual([product]);
  });

  it('Should successfully reduce a product\'s inventory when using ProductsReducer', () => {
    let product = {
      active: true,
      category: 'food',
      name: 'Taco',
      url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80',
      description: 'Mexican hand-food',
      price: 2.50,
      inventory: 100,
      inCart: 0,
    };

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
      ]
    };

    let newState = ProductsReducer(initialState, { type:'ADD_TO_CART', payload: product});

    expect(newState.products[0].inventory).toEqual(99);
    expect(newState.products[0].inCart).toEqual(1);
  });

  it('Should successfully change the active category when using CategoriesReducer', () => {
    let category = {
      name: 'food',
      active: false
    };

    let initialState = {
  categories: [
    { name: 'all', active: true },
    { name: 'food', active: false },
    { name: 'electronics', active: false }
  ],
  activeCategory: 'all',
  categoryDescription: 'Our Complete Catalog',

}

    let newState = CategoriesReducer(initialState, { type:'SELECT_CATEGORY', payload: category.name});

    expect(newState.activeCategory).toEqual('food');
    expect(newState.categories[1].active).toEqual(true);
  });
});