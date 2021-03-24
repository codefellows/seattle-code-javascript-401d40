// import React from 'react';

// desctructing props on instantiation:
//   we expect there to be props.condition
//   any componenet places within the opennin and closing compoenent is defined on 'props.children'
// function If({ condition, children }) {


// if (condition) {
//   return children
// } else {
//   return null
// }
//   return condition ? children : null;
// }

// utility components 
export const If = ({ condition, children }) => condition ? children : null;
export const Else = ({ condition, children }) => condition ? null : children;

