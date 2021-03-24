
import React from 'react';
import './results.scss';

import JSONPretty from 'react-json-pretty';


export default function Results(props) {

  return (
    <article data-testid="results">
      <span>count:<JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></span>
      <span>headers:<JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></span>

      <ul>
        <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
        <li>results:</li>
        <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>

        {/* {props.data.body.map((data, index) => <li key={index}>{data.name}</li>)} */}
        {/* </ul> */}
        {/* <ul> */}
        {/* {props.data.urls.map((data, index) => <li key={index}>{data.url}{}</li>)} */}
        {/* {console.log(props.data.urls)} */}
      </ul>
    </article>
  );
}
