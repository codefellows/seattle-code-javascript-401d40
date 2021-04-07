import { Provider } from 'react-redux';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';

import Header from './components/header/Header.js';
import SimpleCart from './components/cart/SimpleCart.js';
import Categories from './components/storefront/Categories.js';
import CurrentCategory from './components/storefront/Current-category.js';
import Products from './components/storefront/Products.js';
import store from './store/index.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Provider store={store()}>
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={9}>
          <Categories />
            </Grid>
            <Grid item xs={3}>
          <SimpleCart />
            </Grid>
            <Grid item xs={9}>
              <CurrentCategory />
            </Grid>
          </Grid>
          <Products />
          <Footer />
        </Provider>
      </Container>
    </React.Fragment>
  );
}

export default App;
