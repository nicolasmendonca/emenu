import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import ListItem from '../components/ListItem/ListItem';
import { fetchProducts } from '../redux/actions/products';
import { fetchPlaceData, fetchPlaceCategories } from '../redux/actions/places';
import {
  getPlaceData,
  getPlaceDataAsyncState,
  getPlaceCategoriesAsyncState,
  getActiveCategory,
} from '../redux/selectors/places';
import {
  getProducts,
  getProductsAsyncState,
} from '../redux/selectors/products';
import {
  LoaderContainer,
  ListItemContainer,
} from '../components/shared-styled-components';
import { styleConstants } from '../utils/styleConstants';
import { isIdle, hasLoaded } from '../redux/utils/selectors';

function CategoryPage({ placeSlug, categorySlug }) {
  const dispatch = useDispatch();
  const placeData = useSelector(getPlaceData);
  const placeDataAsyncState = useSelector(getPlaceDataAsyncState);
  const placeCategoriesAsyncState = useSelector(getPlaceCategoriesAsyncState);
  const productsAsyncState = useSelector(getProductsAsyncState);
  const products = useSelector(getProducts);
  const activeCategory = useSelector(state =>
    // - Type definitions from redux are wrong, this is valid and documented https://react-redux.js.org/next/api/hooks#using-memoizing-selectors
    // @ts-ignore
    getActiveCategory(state, categorySlug)
  );

  React.useEffect(() => {
    if (isIdle(placeCategoriesAsyncState))
      dispatch(fetchPlaceCategories(placeSlug));
  }, [placeSlug, dispatch, placeCategoriesAsyncState]);

  React.useEffect(() => {
    if (isIdle(placeDataAsyncState)) dispatch(fetchPlaceData(placeSlug));
  }, [dispatch, placeDataAsyncState, placeSlug]);

  React.useEffect(() => {
    dispatch(fetchProducts(placeSlug, categorySlug));
  }, [categorySlug, dispatch, placeSlug]);

  if (
    !hasLoaded(placeDataAsyncState) ||
    !hasLoaded(placeCategoriesAsyncState) ||
    !hasLoaded(productsAsyncState)
  ) {
    return (
      <LoaderContainer>
        <SyncLoader
          size={15}
          margin={5}
          color={styleConstants.primaryColor}
          loading
        />
      </LoaderContainer>
    );
  }

  return (
    <>
      <h1>{activeCategory.name}</h1>
      <ListItemContainer>
        {products.map(product => (
          <ListItem
            key={product.id}
            mainText={product.name}
            imageUrl={product.image}
            linkTo={`/${placeData.slug}`}
          />
        ))}
      </ListItemContainer>
    </>
  );
}

CategoryPage.propTypes = {
  placeSlug: PropTypes.string,
  categorySlug: PropTypes.string,
};

CategoryPage.defaultProps = {
  placeSlug: null,
  categorySlug: null,
};

export default CategoryPage;
