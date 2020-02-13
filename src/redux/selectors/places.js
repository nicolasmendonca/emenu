import { createSelector } from 'reselect';

export const getPlaceDataAsyncState = state => state.placesAsyncState;
export const getPlaceData = state => state.placeData;
export const getPlaceCategoriesAsyncState = state =>
  state.placeCategoriesAsyncState;
export const getPlaceCategories = state => state.placeCategories;

export const getActiveCategory = createSelector(
  [getPlaceCategories, (_, categorySlug) => categorySlug],
  (placeCategories, categorySlug) =>
    placeCategories.find(category => category.slug === categorySlug)
);
