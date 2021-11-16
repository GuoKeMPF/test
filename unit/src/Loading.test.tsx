import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import Loading from './Loading';
import styles from './Loading.less';

describe('loading', () => {
  it('loading render', () => {
    const dom = render(<Loading />);
    const loading = queryByAttribute('class', dom.container, styles.loading);
    expect(loading).toHaveTextContent('Loading');
  });
});
