import React, { Fragment } from 'react';
import { ConnectRC, Link } from 'umi';
import { Space } from 'antd';

const RouterParmas: ConnectRC = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Space>
        <Link to="/unit/routerparmas/1">id 1</Link>
        <Link to="/unit/routerparmas/2">id 2</Link>
      </Space>
      {children}
    </Fragment>
  );
};

export default RouterParmas;
