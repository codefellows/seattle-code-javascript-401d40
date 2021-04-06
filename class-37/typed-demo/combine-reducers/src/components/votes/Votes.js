import { connect } from 'react-redux';


function Votes(props) {
  return (
    <>
      <h1>Votes</h1>
      <p>{props.totalVotes}</p>
    </>
  )
}

// this is a function that will run with the component is mounted onto the DOM.
const mapStateToProps = (reduxState) => {
  return {
    totalVotes: reduxState.totalVotes,
  }
}

export default connect(mapStateToProps)(Votes);
