import React from 'react';
import './app.scss';
import { Provider } from 'react-redux';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Products from './components/products/Products.js';
import store from './store/index.js';
// import Storefront from './components/storefront/Storefront.js';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
