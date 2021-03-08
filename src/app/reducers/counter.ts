import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export const increase = createAction('[COUNT] increase');
export const decrease = createAction('[COUNT] decrease');
export const clear = createAction('[COUNT] clear');


export interface CounterState {
  count: number;
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
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('count');
export const countSelector = createSelector(
  featureSelector,
  state => state.count
);
