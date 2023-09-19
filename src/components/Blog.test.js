import { render, screen } from '@testing-library/react';
import Blog from './Blog';

test('renders Blog component', () => {
  render(<Blog />);
  const textElement = screen.getByText(/Blog/i);
  expect(textElement).toBeInTheDocument();
});