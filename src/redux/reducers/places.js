import { createAsyncReducer } from '../utils/reducers';
import { FETCH_PLACE_DATA, FETCH_PLACE_CATEGORIES } from '../actions/types';
import {
  generateSuccessfulAsyncActionType,
  generateBeginAsyncActionType,
  generateFailedAsyncActionType,
} from '../utils/actions';

export const placesAsyncState = createAsyncReducer(FETCH_PLACE_DATA);

export const placeData = (state = null, action) => {
  switch (action.type) {
    case generateSuccessfulAsyncActionType(FETCH_PLACE_DATA):
      return action.payload;
    case generateBeginAsyncActionType(FETCH_PLACE_DATA):
    case generateFailedAsyncActionType(FETCH_PLACE_DATA):
      return null;
    default:
      return state;
  }
};

export const placeCategoriesAsyncState = createAsyncReducer(
  FETCH_PLACE_CATEGORIES
);

export const placeCategories = (state = [], action) => {
  switch (action.type) {
    case generateSuccessfulAsyncActionType(FETCH_PLACE_CATEGORIES):
      return action.payload;
    case generateBeginAsyncActionType(FETCH_PLACE_CATEGORIES):
    case generateFailedAsyncActionType(FETCH_PLACE_CATEGORIES):
      return [];
    default:
      return state;
  }
};
