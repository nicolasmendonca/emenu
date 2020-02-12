import {
  generateBeginAsyncActionType,
  generateSuccessfulAsyncActionType,
  generateFailedAsyncActionType,
} from './actions';

export const asyncStates = {
  defaultState: 'IDLE',
  beginState: 'BEGIN',
  successfulState: 'SUCCESS',
  failedState: 'FAIL',
};

export const createAsyncReducer = actionName => (
  state = asyncStates.defaultState,
  action
) => {
  switch (action.type) {
    case generateBeginAsyncActionType(actionName):
      return asyncStates.beginState;
    case generateSuccessfulAsyncActionType(actionName):
      return asyncStates.successfulState;
    case generateFailedAsyncActionType(actionName):
      return asyncStates.failedState;
    default:
      return state;
  }
};