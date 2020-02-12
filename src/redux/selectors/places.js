import { createSelector } from 'reselect';
import { hasLoaded, isLoading } from '../utils/selectors';

const getPlacesAsyncState = state => state.placesAsyncState;
export const getPlaceData = state => state.placeData;

export const getPlaceHasLoaded = createSelector(
  [getPlacesAsyncState],
  placesAsyncState => hasLoaded(placesAsyncState)
);

export const getPlaceIsLoading = createSelector(
  [getPlacesAsyncState],
  placesAsyncState => isLoading(placesAsyncState)
);
