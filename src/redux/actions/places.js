import firebase from 'firebase'; // eslint-disable-line no-unused-vars
import {
  createSuccessfulAsyncAction,
  createBeginAsyncAction,
  createFailedAsyncAction,
} from '../utils/actions';
import { FETCH_PLACE_DATA, FETCH_PLACE_CATEGORIES } from './types';
import { mapDocumentsToArray } from '../../firebase/utils';

export const fetchPlaceData = placeSlug => (dispatch, _, extraArgs) => {
  const actionName = FETCH_PLACE_DATA;
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

export const fetchPlaceCategories = placeSlug => (dispatch, _, extraArgs) => {
  const actionName = FETCH_PLACE_CATEGORIES;
  /** @type {{firestore: firebase.firestore.Firestore}} extraArgs */
  const { firestore } = extraArgs;
  dispatch(createBeginAsyncAction({ type: actionName }));
  firestore
    .collection('places')
    .doc(placeSlug)
    .collection('categories')
    .get()
    .then(collection =>
      dispatch(
        createSuccessfulAsyncAction({
          type: actionName,
          payload: mapDocumentsToArray(collection.docs),
        })
      )
    )
    .catch(error =>
      dispatch(createFailedAsyncAction({ type: actionName, payload: error }))
    );
};
