import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CategoryViewer from './categories.js';
import { connect } from 'react-redux';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';
import { useEffect } from 'react';
import { loadProducts } from '../../store/products.js';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: '30px',
//     paddingRight: '30px',
//     margin: 'auto',
//   }
// })

const ProductViewer = (props) => {

  // const classes = useStyles();

  useEffect(() => {
    props.loadProducts();
  }, []); // when this component loads

  return (
    <>
      {console.log(props.products.productsList)}
      <CategoryViewer />
      <Paper>
        <Typography variant="h3" component="h3">Products</Typography>
        <Grid container justify="center" spacing={5}>
          {props.products.productsList.map((product, idx) => {
            if (product.category === props.activeCategory.toLowerCase()) {
              return (
                <Grid item key={idx}>
                  <Card>
                    <CardHeader title={product.name} />
                    <CardContent>
                      <Typography component="p">Description here...</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography component="p">In Stock: {product.inStock}</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton onClick={() => props.addToCart(product)}>ADD TO CART</IconButton>
                      <IconButton>VIEW DETAILS</IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )

            } else {
              return null;
            }
          })}
        </Grid>
      </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription,
  }
}

const mapDispatchToProps = {
  getProducts,
  addToCart,
  loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);
