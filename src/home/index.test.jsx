import { render, screen } from '@testing-library/react';
import Home from './index';

test('Il y a y a un h1', () => {
  render(<Home />);
  const h1 = screen.getByRole('heading', {
    name: /home page/i,
  });
  expect(h1).toBeInTheDocument();
});

test('H1 est en rouge (classe)', () => {
  render(<Home />);
  const h1 = screen.getByRole('heading', {
    name: /home page/i,
  });
  expect(h1).toHaveClass('text-danger');
});
