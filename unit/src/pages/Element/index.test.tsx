import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import Element from './index';
import styles from './index.less';





describe('button', () => {
  describe('render button', () => {
    it('render all buttons', () => {
      const dom = render(<Element />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBe(2);
      expect(buttons[0]).toHaveClass('ant-btn');
      expect(buttons[0]).toHaveAttribute('id', "button_plus");
      expect(buttons[0]).toHaveAttribute('type', 'button');
      expect(buttons[1]).toHaveClass('ant-btn');
      expect(buttons[1]).toHaveAttribute('id', "button_reduce");
      expect(buttons[1]).toHaveAttribute('type', 'button');
    });
  });

  describe('button click work', () => {
    it('plus button work', () => {
      const dom = render(<Element />);
      const plus = queryByAttribute(
        'id',
        dom.container,
        "button_plus",
      );
      const value = queryByAttribute('class', dom.container, "value");

      plus?.click();
      expect(value).toHaveTextContent('1');
      plus?.click();
      expect(value).toHaveTextContent('2');
    });
    it('reduce button work', () => {
      const dom = render(<Element />);
      const reduce = queryByAttribute(
        'id',
        dom.container,
        "button_reduce",
      );
      const value = queryByAttribute('class', dom.container, "value");

      reduce?.click();
      expect(value).toHaveTextContent('-1');
      reduce?.click();
      expect(value).toHaveTextContent('-2');
    });
    it('all button work', () => {
      const dom = render(<Element />);
      const plus = queryByAttribute(
        'id',
        dom.container,
        "button_plus",
      );
      const reduce = queryByAttribute(
        'id',
        dom.container,
        "button_reduce",
      );
      const value = queryByAttribute('class', dom.container, "value");

      plus?.click();
      expect(value).toHaveTextContent('1');
      plus?.click();
      expect(value).toHaveTextContent('2');
      reduce?.click();
      expect(value).toHaveTextContent('1');
      reduce?.click();
      expect(value).toHaveTextContent('0');
    });
  });
});
