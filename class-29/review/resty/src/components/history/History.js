import React from 'react';

function History({ requests }) {
  return (
    <div>
      {requests.map(request => {
        return (
          <p>
            <span>URL : {request.url}</span><br />
            <span>METHOD : {request.method}</span>
          </p>
        )
      })}
    </div>
  )
}

export default History;
