import { message } from 'antd';
import React from 'react';

export const dva = {
  config: {
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};
