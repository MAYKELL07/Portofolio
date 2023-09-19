import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects component', () => {
  render(<Projects />);
  const textElement = screen.getByText(/Projects/i);
  expect(textElement).toBeInTheDocument();
});