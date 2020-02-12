import { createAsyncReducer } from '../utils/reducers';
import { FETCH_PLACE } from '../actions/types';
import {
  generateSuccessfulAsyncActionType,
  generateBeginAsyncActionType,
  generateFailedAsyncActionType,
} from '../utils/actions';

export const placesAsyncState = createAsyncReducer(FETCH_PLACE);

export const placeData = (state = null, action) => {
  switch (action.type) {
    case generateSuccessfulAsyncActionType(FETCH_PLACE):
      return action.payload;
    case generateBeginAsyncActionType(FETCH_PLACE):
    case generateFailedAsyncActionType(FETCH_PLACE):
    default:
      return state;
  }
};
