import firebase from 'firebase'; // eslint-disable-line no-unused-vars
import {
  createSuccessfulAsyncAction,
  createBeginAsyncAction,
  createFailedAsyncAction,
} from '../utils/actions';
import { FETCH_PLACE } from './types';

export const fetchPlaceData = placeSlug => (dispatch, _, extraArgs) => {
  const actionName = FETCH_PLACE;
  /** @type {{firestore: firebase.firestore.Firestore}} extraArgs */
  const { firestore } = extraArgs;
  dispatch(createBeginAsyncAction({ type: actionName }));
  firestore
    .collection('places')
    .doc(placeSlug)
    .get()
    .then(doc => doc.data())
    .then(payload =>
      dispatch(
        createSuccessfulAsyncAction({
          type: actionName,
          payload,
        })
      )
    )
    .catch(error =>
      dispatch(createFailedAsyncAction({ type: actionName, payload: error }))
    );
};
