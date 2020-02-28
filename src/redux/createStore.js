import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from '../firebase/config';
import reducers from './reducers';

const firebaseInstance = firebase.initializeApp(firebaseConfig);

const firestore = firebaseInstance.firestore();
const auth = firebaseInstance.auth();

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(Thunk.withExtraArgument({ firestore, auth }))
  )
);

export default store;
