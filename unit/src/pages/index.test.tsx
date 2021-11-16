import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from './index';

it('render element', () => {
  render(<IndexPage />);
  expect(screen.getByText('Welcome')).toBeInTheDocument();
});
