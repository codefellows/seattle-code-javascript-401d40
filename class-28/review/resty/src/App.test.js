import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App.js';

describe('testing the application component', () => {
  it('it should display pokemon when given a API url', async () => {
    render(<App />);

    let input = screen.getByTestId('input-text');
    userEvent.type(input, 'https://pokeapi.co/api/v2/pokemon');
    let button = screen.getByText('GO!');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    let results = await screen.findByTestId('results');

    expect(results).toBeInTheDocument();

    let bulbasaur = await screen.findByText(/bulbasaur/);

    expect(bulbasaur).toBeInTheDocument();
  });
});
