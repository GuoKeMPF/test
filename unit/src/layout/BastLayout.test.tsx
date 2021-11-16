import React from 'react';
import BastLayout from './BastLayout';
import { render, queryByAttribute, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

describe('BastLayout', () => {
  it('BastLayout render', () => {
    const dom = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Route
          component={(props: any) => (
            <BastLayout {...props}>
              <div id="mock_children">children</div>
            </BastLayout>
          )}
          path={'/'}
        />
      </MemoryRouter>
    );
    const clildren = queryByAttribute('id', dom.container, 'mock_children');
    expect(clildren).toHaveTextContent('children');
  });
});
