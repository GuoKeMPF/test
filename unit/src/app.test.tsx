import { dva, onRouteChange } from './app';
import { message } from 'antd';

jest.mock('antd', () => ({
  message: {
    error: jest.fn(),
  },
}));

describe('app.tsx', () => {
  it('dva config snapshot', () => {
    expect(dva).toMatchInlineSnapshot(`
      Object {
        "config": Object {
          "onError": [Function],
        },
      }
    `);
  });
  it('dva config onerror', () => {
    expect(dva).not.toBeNull();
    expect(dva).toHaveProperty('config');
    expect(dva.config).toHaveProperty('onError');
    const mock_error = new Error('mock error');
    dva.config.onError(mock_error);
    expect(message.error).toHaveBeenNthCalledWith(1, mock_error.message, 3);
  });
});
