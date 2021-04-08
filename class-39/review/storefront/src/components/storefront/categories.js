import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { inactive, activate } from '../../store/categories.js';

const CategoryViewer = (props) => {
  return (
    <>
      <h4>Browse Our Categories</h4>
      <Button onClick={() => props.activate('Electronics', 'Making your life easier, one volt at a time')}>Electronics</Button>
      <Button onClick={() => props.activate('Food', 'Stuff for you to eat')}>Food</Button>
      <p>{props.activeDescription}</p>
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
  inactive,
  activate,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryViewer);