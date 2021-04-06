import React from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Button } from '@material-ui/core';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
import { inactive, active } from '../../store/categories.js';
import { getProducts } from '../../store/products.js'

const productViewer = props => {
  return (
    <>
      <Typography variant="h2" component="h2">Products</Typography>
      <Button onClick={() => props.active('Electronics')}>Electronics</Button>
      <Button onClick={() => props.active('Food')}>Food</Button>
      <Grid container justify="center" spacing={5}>
        {/* {console.log(props)} */}
        {props.products.productList.map((product, index) => {
          if (product.category === props.activeCategory) {
            return (
              <Grid item key={index}>
                <Card>
                  <CardHeader title={product.name} />
                  {/* <Typography variant="p" component="p">{candidate.name}</Typography> */}
                  <CardContent>
                    <Typography component="p">$ {product.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>Add to cart</IconButton>
                    <IconButton>View details</IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          } else {
            return null;
          }
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  return { products: state.products, activeCategory: state.categories.activeCategory }
}

const mapDispatchToProps = {
  inactive,
  active,
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(productViewer);
