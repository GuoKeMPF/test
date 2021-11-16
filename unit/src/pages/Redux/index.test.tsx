import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import styles from './index.less';
import Redux from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Store, AnyAction } from 'redux';

const mockStore = configureStore([]);

let store: Store<any, AnyAction>;
beforeAll(() => {
  store = mockStore({
    test_count: {
      effect_count: 0,
    },
  });
  store.dispatch = jest.fn();
});

describe('Redux', () => {
  it('Redux render', () => {
    const dom = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Route
          component={(props: any) => (
            <Provider store={store}>
              <Redux {...props} />
            </Provider>
          )}
          path={'/'}
        />
      </MemoryRouter>,
    );

    const plus = queryByAttribute(
      'id',
      dom.container,
      styles.effect_button_plus,
    );
    expect(plus).not.toBeNull();
    plus?.click();
    expect(store.dispatch).toHaveBeenNthCalledWith(1, {
      type: 'test_count/effects_plus',
    });
    const reduce = queryByAttribute(
      'id',
      dom.container,
      styles.effect_button_reduce,
    );
    expect(reduce).not.toBeNull();
    reduce?.click();
    expect(store.dispatch).toHaveBeenNthCalledWith(2, {
      type: 'test_count/effects_reduce',
    });
  });
});
