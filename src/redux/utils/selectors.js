import { asyncStates } from './reducers';

export const isIdle = reducerState => reducerState === asyncStates.defaultState;
export const isLoading = reducerState =>
  asyncStates.beginState === reducerState;
export const hasLoaded = reducerState =>
  reducerState === asyncStates.successfulState;
export const hasFailed = reducerState =>
  reducerState === asyncStates.failedState;
