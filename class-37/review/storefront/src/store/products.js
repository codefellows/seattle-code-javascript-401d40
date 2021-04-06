const initialState = {
  productList: [
    {
      _id: '5f1a51f01910080017657ed2',
      name: '1TB USB',
      category: 'Electronics',
      inStock: 963,
      price: 100.99
    },
    {
      _id: '5f1a51f71910080017657ed3',
      name: 'Monitor',
      category: 'Electronics',
      inStock: 960,
      price: 100.99
    },
    {
      _id: '5f1a51ff1910080017657ed4',
      name: 'Mouse',
      category: 'Electronics',
      inStock: 976,
      price: 100.99
    },
    {
      _id: '5f1a52031910080017657ed5',
      name: 'Keyboard',
      category: 'Electronics',
      inStock: 982,
      price: 100.99
    },
    {
      _id: '5f1a5f861910080017657ed7',
      name: 'TV',
      category: 'Electronics',
      inStock: 1973,
      price: 699
    },
    {
      _id: '5f1a5f761910080017657ed6',
      name: 'Apples',
      category: 'Food',
      inStock: 979,
      price: 100.1
    },
    {
      _id: '5f1a5faf1910080017657ed8',
      name: 'Calzones',
      category: 'Food',
      inStock: 929,
      price: 100.1
    },
  ],
  activeProduct: ''
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      const products = getProducts(payload.category);
      return { ...state, products: products };
    default:
      return state;
  }
}

export function getProducts(category) {
  const products = initialState.productList;
  const filteredProducts = products.filter(product => product.category === category);
  return filteredProducts;
}