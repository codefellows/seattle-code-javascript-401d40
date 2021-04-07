let initialState = {
  categories: [
    { name: 'all', active: true },
    { name: 'food', active: false },
    { name: 'electronics', active: false }
  ],
  activeCategory: 'all',
  categoryDescription: 'Our Complete Catalog',

}
let newCategory;
let newDescription;
let categories;

export default function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case "SELECT_CATEGORY":

      newCategory = payload;
      if(payload === 'all') {
        newDescription = 'Our Complete Catalog';
      } else if(payload === 'food') {
        newDescription = 'Delectable Digital Delights';
      } else {
        newDescription = 'Terrific Technological Treats';
      }

      categories = state.categories.map(category => {
        if(category.name === payload) {
          return { name: category.name, active: true };
        }
        return { name: category.name, active: false };
      });

      return { activeCategory: newCategory, categoryDescription: newDescription, categories: categories };

    case "SELECT_ELECTRONICS_CATEGORY":

      return { activeCategory: newCategory, categoryDescription: newDescription, categories: categories };
      
    default:
      return state;
  }

}

export function selectCategory(name) {

  return {
    type: "SELECT_CATEGORY",
    payload: name,
  }
}
