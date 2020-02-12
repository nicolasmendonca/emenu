import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import firebase from 'firebase';

import { firebaseConfig } from '../firebase/config';
import reducers from './reducers';

const firebaseInstance = firebase.initializeApp(firebaseConfig);

const firestore = firebaseInstance.firestore();

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(Thunk.withExtraArgument({ firestore })))
);

export default store;
