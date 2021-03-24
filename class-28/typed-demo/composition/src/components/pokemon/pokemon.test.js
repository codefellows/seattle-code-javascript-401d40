import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Pokemon from './Pokemon.js';


// let url = 'http://test.com';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        { name: 'test' },
        { name: "Also test" }
      ],
    }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('testing the Pokemon component', () => {
  it('should fetch and display pokemon data', async () => {
    render(<Pokemon />);

    // userEvent.type(input, url);

    await waitFor(() => expect(screen.getByText('test')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Also test')).toBeInTheDocument());
  })
})

