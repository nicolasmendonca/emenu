import * as placesReducers from './places';
import * as productsReducers from './products';
import * as themesReducers from './themes';
import * as users from './users';

export default {
  ...users,
  ...themesReducers,
  ...productsReducers,
  ...placesReducers,
};
