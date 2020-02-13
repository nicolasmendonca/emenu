import {
  createAsyncReducer,
  createFetchResourceReducer,
} from '../utils/reducers';
import { FETCH_PLACE_DATA, FETCH_PLACE_CATEGORIES } from '../actions/types';

export const placesAsyncState = createAsyncReducer(FETCH_PLACE_DATA);
export const placeData = createFetchResourceReducer(FETCH_PLACE_DATA);

export const placeCategoriesAsyncState = createAsyncReducer(
  FETCH_PLACE_CATEGORIES
);
export const placeCategories = createFetchResourceReducer(
  FETCH_PLACE_CATEGORIES,
  []
);
