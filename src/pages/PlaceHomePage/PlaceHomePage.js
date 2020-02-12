import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import {
  fetchPlaceData,
  fetchPlaceCategories,
} from '../../redux/actions/places';
import {
  getPlaceIsLoading,
  getPlaceData,
  getPlaceCategoriesIsLoading,
  getPlaceCategories,
} from '../../redux/selectors/places';
import { styleConstants } from '../../utils/styleConstants';
import ListItem from '../../components/ListItem/ListItem';

function PlaceHomePage({ placeSlug }) {
  const dispatch = useDispatch();
  const placeData = useSelector(getPlaceData);
  const isLoadingPlaceData = useSelector(getPlaceIsLoading);
  const placeCategories = useSelector(getPlaceCategories);
  const isLoadingPlaceCategories = useSelector(getPlaceCategoriesIsLoading);
  React.useEffect(() => {
    dispatch(fetchPlaceData(placeSlug));
    dispatch(fetchPlaceCategories(placeSlug));
  }, [placeSlug, dispatch]);

  if (isLoadingPlaceData || isLoadingPlaceCategories) {
    return (
      <LoaderContainer>
        <SyncLoader
          size={15}
          margin={5}
          color={styleConstants.primaryColor}
          loading={isLoadingPlaceData}
        />
      </LoaderContainer>
    );
  }

  return (
    <>
      <h1>{placeData.name}</h1>
      <ListItemContainer>
        {placeCategories.map(category => (
          <ListItem
            key={category.id}
            mainText={category.name}
            linkTo={`/${placeSlug}/${category.id}`}
          />
        ))}
      </ListItemContainer>
    </>
  );
}

PlaceHomePage.propTypes = {
  placeSlug: PropTypes.string,
};

PlaceHomePage.defaultProps = {
  placeSlug: '',
};

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ListItemContainer = styled.div`
  border-top: 1px solid black;
`;

export default PlaceHomePage;
