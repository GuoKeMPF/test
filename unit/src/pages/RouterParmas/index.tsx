import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import type { ConnectRC } from 'umi';

const RouterParmas: ConnectRC = (props) => {
  const { match } = props;
  const { params }: any = match;
  const { id } = params;

  return (
    <Fragment>
      <p>id:{id}</p>
    </Fragment>
  );
};

export default withRouter(RouterParmas);
