import firebase from 'firebase';
import { ATTEMPT_LOGIN } from './types';
import {
  createBeginAsyncAction,
  createSuccessfulAsyncAction,
  createFailedAsyncAction,
} from '../utils/actions';
import User from '../../entities/user';
import { log } from '../../utils/logger';

export const attemptLogin = () => (dispatch, _, extraArgs) => {
  const actionName = ATTEMPT_LOGIN;
  /** @type {{auth: firebase.auth.Auth, firestore: firebase.firestore.Firestore}} extraArgs */
  const { auth, firestore } = extraArgs;
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  dispatch(createBeginAsyncAction({ type: actionName }));
  auth
    .signInWithPopup(googleAuthProvider)
    .then(userData => {
      log(userData.user.toJSON());
      // @ts-ignore
      const userInstance = User.fromJson(userData);
      firestore
        .collection('users')
        .doc(userInstance.get('uid'))
        .set(userInstance.toJson());
      dispatch(
        createSuccessfulAsyncAction({ type: actionName, payload: userInstance })
      );
    })
    .catch(e =>
      dispatch(
        createFailedAsyncAction({ type: actionName, payload: e.message })
      )
    );
};
