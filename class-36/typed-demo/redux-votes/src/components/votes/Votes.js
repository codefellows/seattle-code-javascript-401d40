import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux'; // this ensures that we are connected to our redux store

// import directly from the store directory.
import { decrementAction, incrementAction } from '../../store/votes.js';

const VotesCounter = (props) => {
  return (
    <Paper>
      <Typography variant="h2" component="h2">Candidates</Typography>
      <Grid container justify="center" spacing={5}>
        {props.candidates.map(candidate => {
          return (
            <Grid item>
              <Card>
                <CardHeader title={candidate.name} />
                {/* <Typography variant="p" component="p">{candidate.name}</Typography> */}
                <CardContent>
                  <Typography variant="p" component="p">{candidate.votes}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton onClick={() => props.decrementAction(candidate.name)}>
                    -
                  </IconButton>
                  <IconButton onClick={() => props.incrementAction(candidate.name)}>
                    +
                  </IconButton>
                  {/* <button onClick={() => props.decrementAction(candidate.name)}>-</button>
                  <button onClick={() => props.incrementAction(candidate.name)}>+</button> */}
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      <h3>Total: {props.total}</h3>
    </Paper>
  )
}

// we need to create a function that tells redux how to attach store data to our components

const mapStateToProps = (state) => {
  return {
    candidates: state.votes.candidates,
    total: state.votes.total,
  }
}

const mapDispatchToProps = {
  decrementAction,
  incrementAction
}

// connect() returns a function that consumes a React Component
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
