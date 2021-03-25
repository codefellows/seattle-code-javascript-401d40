import { render, screen, getRoles } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  let app = screen.getByRole('application');
  console.log(app);
  console.log(getRoles(app));
  expect(app).toBeInTheDocument();
});
