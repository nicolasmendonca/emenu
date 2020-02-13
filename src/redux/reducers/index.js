import * as placesReducers from './places';
import * as productsReducers from './products';

export default {
  ...productsReducers,
  ...placesReducers,
};
