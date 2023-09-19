import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact component', () => {
  render(<Contact />);
  const textElement = screen.getByText(/Contact/i);
  expect(textElement).toBeInTheDocument();
});