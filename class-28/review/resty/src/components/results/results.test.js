import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from './Results.js';

describe('testing the results component', () => {
  it('should render a list of results', async () => {

    let data = {
      count: 1,
      body: [{ name: 'jacob' }],
    };
    render(<Results data={data} />);

    expect(screen.getByText(/jacob/)).toBeInTheDocument();
  });
});
