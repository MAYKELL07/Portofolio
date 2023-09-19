import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  const textElement = screen.getByText(/Game Developer and Coder Portfolio/i);
  expect(textElement).toBeInTheDocument();
});