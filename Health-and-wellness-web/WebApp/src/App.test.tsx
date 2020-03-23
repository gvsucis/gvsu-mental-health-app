import React from 'react';
import { render } from '@testing-library/react';
import WebApp from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<WebApp />);
  expect(baseElement).toBeDefined();
});
