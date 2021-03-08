import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {CounterState, countReducer} from './counter';

export interface State {
  count: CounterState;
}

export const reducers: ActionReducerMap<State> = {
count: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
