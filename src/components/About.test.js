import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component', () => {
  render(<About />);
  const textElement = screen.getByText(/About Me/i);
  expect(textElement).toBeInTheDocument();
});