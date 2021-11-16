import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router';
import RouterParmas from './index';

describe('Redux', () => {

  const history = createMemoryHistory({
    initialEntries: ['/unit/routerparmas/1'], initialIndex: 0
  })
  it('Redux render', () => {
    const dom = render(
      <Router history={history}>
        <Route
          component={(props: any) => <RouterParmas {...props} />}
          path={'/unit/routerparmas/:id'}
        />
      </Router>,
    );
    expect(screen.getByText('id:1')).toBeInTheDocument();
  });
});
