import { Effect, Reducer } from 'umi';

export interface TestCountStateType {
  effect_count: number;
}

export const InitTestCountStore: TestCountStateType = {
  effect_count: 0,
};
export interface ModelType {
  namespace: 'test_count';
  state: TestCountStateType;
  effects: {
    effects_plus: Effect;
    effects_reduce: Effect;
  };
  reducers: {
    plus: Reducer<TestCountStateType>;
    reduce: Reducer<TestCountStateType>;
  };
}

export const selectEffectCount = (store: any) => store.test_count.effect_count;

const model: ModelType = {
  namespace: 'test_count',
  state: InitTestCountStore,
  effects: {
    *effects_plus(_action, { select, put }) {
      const effect_count = yield select(selectEffectCount);
      yield put({
        type: 'plus',
        payload: {
          effect_count: effect_count + 1,
        },
      });
    },
    *effects_reduce(_action, { select, put }) {
      const effect_count = yield select(selectEffectCount);
      yield put({
        type: 'reduce',
        payload: {
          effect_count: effect_count - 1,
        },
      });
    },
  },
  reducers: {
    plus(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    reduce(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default model;
