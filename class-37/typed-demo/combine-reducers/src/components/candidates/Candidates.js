import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { increment, decrement } from '../../store/actions.js';


// const useStyles = makeStyles({
//   card: {
//     backgroundColor: 'black',
//     color: 'white',
//     margin: '15px',
//   }
// });
import candidateStyles from './candidateSyles.js';

function Candidates(props) {

  const classes = candidateStyles();

  return (
    <>
      <h1>Candidates</h1>
      { props.candidates.map(candidate => {
        return (
          <Card key={candidate.name} className={classes.card}>
            <CardHeader
              title={candidate.name}
            />
            <CardContent>
              <Typography>{candidate.votes}</Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} onClick={() => props.decrement(candidate.name)}>-</Button>
              <Button className={classes.button} onClick={() => props.increment(candidate.name)}>+</Button>
            </CardActions>
          </Card>
        )
      })}
    </>
  )
}

// this is a function that will run with the component is mounted onto the DOM.
const mapStateToProps = (reduxState) => {
  return {
    candidates: reduxState.candidates,
  }
}

export default connect(mapStateToProps, { increment, decrement })(Candidates);
