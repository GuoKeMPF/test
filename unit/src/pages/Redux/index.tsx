import React from 'react';
import type { FC } from 'react';
import { Button, Space } from 'antd';
import { connect } from 'dva';
import type { TestCountStateType, ConnectProps, Loading } from 'umi';
import styles from './index.less';
interface PropsType extends ConnectProps {
  effect_count: number;
}

const Redux: FC<PropsType> = (props) => {
  const { dispatch, effect_count } = props;
  const updateEffectPlus = () => {
    dispatch &&
      dispatch({
        type: 'test_count/effects_plus',
      });
  };
  const updateEffectReducer = () => {
    dispatch &&
      dispatch({
        type: 'test_count/effects_reduce',
      });
  };
  return (
    <Space>
      <Button
        id={styles.effect_button_plus}
        type="default"
        onClick={updateEffectPlus}
      >
        Plus effect
      </Button>
      <Button
        id={styles.effect_button_reduce}
        type="primary"
        onClick={updateEffectReducer}
      >
        Reduce effect
      </Button>
      <p className={styles.value}>effect: {effect_count}</p>
    </Space>
  );
};

export default connect(
  ({ test_count }: { test_count: TestCountStateType }) => ({
    effect_count: test_count.effect_count,
  }),
)(Redux);
