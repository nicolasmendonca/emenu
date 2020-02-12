import { asyncStates } from './reducers';

export const isLoading = reducerState =>
  [asyncStates.beginState, asyncStates.defaultState].includes(reducerState);
export const hasLoaded = reducerState =>
  reducerState === asyncStates.successfulState;
export const hasFailed = reducerState =>
  reducerState === asyncStates.failedState;
