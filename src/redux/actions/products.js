import firebase from 'firebase'; // eslint-disable-line no-unused-vars
import {
  createSuccessfulAsyncAction,
  createBeginAsyncAction,
  createFailedAsyncAction,
} from '../utils/actions';
import { FETCH_PRODUCTS } from './types';
import { mapDocumentsToArray } from '../../firebase/utils';

export const fetchProducts = (placeSlug, categorySlug) => (
  dispatch,
  _,
  extraArgs
) => {
  const actionName = FETCH_PRODUCTS;
  /** @type {{firestore: firebase.firestore.Firestore}} extraArgs */
  const { firestore } = extraArgs;
  dispatch(createBeginAsyncAction({ type: actionName }));
  firestore
    .collection('places')
    .doc(placeSlug)
    .collection('categories')
    .doc(categorySlug)
    .collection('products')
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
      dispatch(
        createFailedAsyncAction({ type: actionName, payload: error.message })
      )
    );
};
