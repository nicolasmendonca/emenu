import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import {
  fetchPlaceData,
  fetchPlaceCategories,
} from '../../redux/actions/places';
import {
  getPlaceData,
  getPlaceCategories,
  getPlaceDataAsyncState,
  getPlaceCategoriesAsyncState,
} from '../../redux/selectors/places';
import { getActiveTheme } from '../../redux/selectors/themes';
import ListItem from '../../components/ListItem/ListItem';
import {
  ListItemContainer,
  LoaderContainer,
} from '../../components/shared-styled-components';
import { hasLoaded, isIdle } from '../../redux/utils/selectors';
import { PageWrapper, Title } from './Styles';
import { NavContainer } from '../../components/Nav/Styles';

function PlaceHomePage({ placeSlug }) {
  const dispatch = useDispatch();
  const placeData = useSelector(getPlaceData);
  const theme = useSelector(getActiveTheme);
  const placeDataAsyncState = useSelector(getPlaceDataAsyncState);
  const placeCategories = useSelector(getPlaceCategories);
  const placeCategoriesAsyncState = useSelector(getPlaceCategoriesAsyncState);

  React.useEffect(() => {
    if (isIdle(placeCategoriesAsyncState)) {
      dispatch(fetchPlaceCategories(placeSlug));
    }
  });

  React.useEffect(() => {
    if (isIdle(placeDataAsyncState)) {
      dispatch(fetchPlaceData(placeSlug));
    }
  });

  if (
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
    <PageWrapper>
      <NavContainer>
        <Title>{placeData.name}</Title>
      </NavContainer>
      <ListItemContainer>
        {placeCategories.map(category => (
          <ListItem
            key={category.id}
            mainText={category.name}
            linkTo={`/${placeSlug}/${category.slug}`}
          />
        ))}
      </ListItemContainer>
    </PageWrapper>
  );
}

PlaceHomePage.propTypes = {
  placeSlug: PropTypes.string,
};

PlaceHomePage.defaultProps = {
  placeSlug: '',
};

export default PlaceHomePage;
