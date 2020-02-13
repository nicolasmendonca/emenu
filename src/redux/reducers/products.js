import {
  createAsyncReducer,
  createFetchResourceReducer,
} from '../utils/reducers';
import { FETCH_PRODUCTS } from '../actions/types';

export const productsAsyncState = createAsyncReducer(FETCH_PRODUCTS);
export const products = createFetchResourceReducer(FETCH_PRODUCTS, []);
