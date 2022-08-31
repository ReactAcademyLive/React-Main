import { render, screen } from '@testing-library/react';
import Home from './index';

//Let's put the routing of /Dave, for the last test below.
jest.mock('react-router-dom', () => ({
  useParams: () => {
    return { name: 'Dave' };
  },
}));

test("There's an h1 tag", () => {
  render(<Home />);
  const h1 = screen.getByRole('heading', {
    name: /home page/i,
  });
  expect(h1).toBeInTheDocument();
});

test('Paragraph says Hello World', () => {
  render(<Home />);
  const p = screen.getByText(/Hello/i);
  expect(p).toBeInTheDocument();
});

test('Paragraph says Hello Dave', () => {
  render(<Home />);
  const p = screen.getByText(/hello/i);
  expect(p.textContent.includes('Dave')).toBe(true);
});
