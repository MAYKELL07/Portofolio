import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

test('renders Portfolio component', () => {
  render(<Portfolio />);
  const textElement = screen.getByText(/About Me/i);
  expect(textElement).toBeInTheDocument();
  const textElement2 = screen.getByText(/Blog/i);
  expect(textElement2).toBeInTheDocument();
  const textElement3 = screen.getByText(/Contact/i);
  expect(textElement3).toBeInTheDocument();
  const textElement4 = screen.getByText(/Game Developer and Coder Portfolio/i);
  expect(textElement4).toBeInTheDocument();
});