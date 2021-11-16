import { effects } from 'redux-saga';
import test_count, {
  selectEffectCount,
  InitTestCountStore,
} from './test_count';

describe('Test effects_plus model', () => {
  it('selectEffectCount', () => {
    const effect_count = 0;
    const store = {
      test_count: InitTestCountStore,
    };
    const res = selectEffectCount(store);
    expect(res).toEqual(effect_count);
  });

  it('Test effects_plus', async () => {
    const { call, put, select, take, cancel } = effects;
    const sagas = test_count.effects;
    const saga = sagas.effects_plus;
    const generator: any = saga(
      {
        type: 'effects_plus',
      },
      { put, select, call, take, cancel },
    );
    let next = generator.next();
    const selectResult = await select(selectEffectCount);
    expect(next.value).toEqual(selectResult);

    next = generator.next(2);
    let action = {
      type: 'plus',
      payload: {
        effect_count: 2 + 1,
      },
    };

    let saveTask = await put(action);
    expect(next.value).toEqual(saveTask);

    next = generator.next();
    expect(next.value).toEqual(undefined);
  });

  it('Test effects_reduce', async () => {
    const { call, put, select, take, cancel } = effects;
    const sagas = test_count.effects;
    const saga = sagas.effects_reduce;
    const generator: any = saga(
      {
        type: 'effects_reduce',
      },
      { put, select, call, take, cancel },
    );
    let next = generator.next();
    const selectResult = await select(selectEffectCount);
    expect(next.value).toEqual(selectResult);

    next = generator.next(2);
    let action = {
      type: 'reduce',
      payload: {
        effect_count: 2 - 1,
      },
    };

    let saveTask = await put(action);
    expect(next.value).toEqual(saveTask);

    next = generator.next();
    expect(next.value).toEqual(undefined);
  });

  it('Test plus', () => {
    const reducers = test_count.reducers;
    const plus = reducers.plus;
    const state = InitTestCountStore;
    const action = {
      type: 'plus',
      payload: {
        effect_count: 0 + 1,
      },
    };

    expect(plus(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });

  it('Test reduce', () => {
    const reducers = test_count.reducers;
    const reduce = reducers.reduce;
    const state = InitTestCountStore;
    const action = {
      type: 'reduce',
      payload: {
        effect_count: 0 - 1,
      },
    };

    expect(reduce(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });
});
