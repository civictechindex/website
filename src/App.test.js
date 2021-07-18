import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Civic Tech Index', () => {
  const { getAllByText } = render(<App />);
  const ctiElements = getAllByText(/Civic Tech Index/);
  expect(ctiElements[0]).toBeInTheDocument();
});
