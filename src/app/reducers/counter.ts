import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';

export const COUNTER_KEY = 'count';

export const increase = createAction('[COUNT] increase');
export const decrease = createAction('[COUNT] decrease');
export const clear = createAction('[COUNT] clear');
export const changeUpdatedAt = createAction('[COUNT] change Updated At',
props<{ updatedAt: number }>()
  );


export interface CounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: CounterState = {
  count: 0
};

export const countReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
);

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);
export const countSelector = createSelector(
  featureSelector,
  state => state.count
);

export const updatedAt = createSelector(
  featureSelector,
  state => state.updatedAt
);
