import * as placesReducers from './places';
import * as productsReducers from './products';
import * as users from './users';

export default {
  ...productsReducers,
  ...placesReducers,
  ...users,
};
