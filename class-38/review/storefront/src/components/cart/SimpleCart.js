import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart.js';
import { If } from '../if/If.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  cart: {
    position: 'absolute',
    maxHeight: '30vh',
    overflow: 'scroll',
  }
});

const CartDisplay = (props) => {
  const [dense] = React.useState(false);
  const classes = useStyles();
  return (

    <div>
      <Paper id="simple-cart" className={classes.cart} evelation={3}>
        <List dense={dense}>
          <ListItem>
            <ListItemText
              primary="Shopping Cart"
            />
          </ListItem>
          <If condition={props.cart.length > 0}>
            {props.cart.map(item => {
              return (
                <ListItem key={item.name}>
                  <ListItemText
                    primary={item.name}
                    secondary={item.inCart}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => props.removeFromCart(item)} color="secondary" edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </If>
        </List>
      </Paper>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  }
}

const mapDispatchToProps = {
  removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);
