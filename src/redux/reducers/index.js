import * as placesReducers from './places';
import * as productsReducers from './products';
import * as themesReducers from './themes';

export default {
  ...themesReducers,
  ...productsReducers,
  ...placesReducers,
};
