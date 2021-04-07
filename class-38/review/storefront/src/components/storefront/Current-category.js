import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/categories.js';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  uppercase: {
    textTransform: 'uppercase',
  },
});

const CurrentCategory = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" align="center" style={{ margin: '24px auto' }}>
        <Grid item xs={12} justify="center">
          <Typography className={classes.uppercase} gutterBottom variant="h1" component="h2">
            {props.activeCategory}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.uppercase} gutterBottom variant="h4" component="h4">
            {props.categoryDescription}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
    categoryDescription: state.categories.categoryDescription,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentCategory);