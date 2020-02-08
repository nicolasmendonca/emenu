import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

const store = createStore(
  () => ({}),
  {},
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
