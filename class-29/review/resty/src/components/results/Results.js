import React from 'react';

function Results({ request }) {

  return (
    <div>
      <span>{request.method}</span>
      <span>{request.url}</span>
      <span>{JSON.stringify(request.body)}</span>
    </div>
  )

}

export default Results;
