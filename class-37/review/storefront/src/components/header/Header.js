import React from 'react';
import { Typography } from '@material-ui/core';
import './header.scss';


export default function Header() {
  return (
    <>
      <header>
        <Typography variant="h2" component="h1">
          OUR STORE
        </Typography>
        <nav>
          <p>Cart (0)</p>
        </nav>
      </header>
    </>
  );
}