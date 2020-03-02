import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import { fetchProducts } from '../../redux/actions/products';
import {
  fetchPlaceData,
  fetchPlaceCategories,
} from '../../redux/actions/places';
import {
  getPlaceDataAsyncState,
  getPlaceCategoriesAsyncState,
  getActiveCategory,
} from '../../redux/selectors/places';
import {
  getProducts,
  getProductsAsyncState,
} from '../../redux/selectors/products';
import { LoaderContainer } from '../../components/shared-styled-components';
import { Title } from '../PlaceHomePage/Styles';
import { isIdle, hasLoaded } from '../../redux/utils/selectors';
import ProductCard, {
  ProductCardsContainer,
} from '../../components/ProductCard/ProductCard';
import { getActiveTheme } from '../../redux/selectors/themes';
import { NavContainer } from '../../components/Nav/Styles';

function CategoryPage({ placeSlug, categorySlug }) {
  const dispatch = useDispatch();
  const theme = useSelector(getActiveTheme);
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
    !hasLoaded(productsAsyncState) ||
    !hasLoaded(placeDataAsyncState) ||
    !hasLoaded(placeCategoriesAsyncState)
  ) {
    return (
      <LoaderContainer>
        <SyncLoader size={15} margin={5} color={theme.primaryColor} loading />
      </LoaderContainer>
    );
  }

  return (
    <>
      <NavContainer>
        <Title>{activeCategory.name}</Title>
      </NavContainer>
      <ProductCardsContainer>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </ProductCardsContainer>
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
