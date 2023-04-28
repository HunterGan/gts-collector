import { render, screen } from '@testing-library/react';
import init from './init.jsx';

test('renders learn react link', () => {
  const app = init();
  render({app});
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
