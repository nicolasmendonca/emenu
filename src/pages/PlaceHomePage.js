import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import { fetchPlaceData } from '../redux/actions/places';
import { getPlaceIsLoading, getPlaceData } from '../redux/selectors/places';
import { styleConstants } from '../utils/styleConstants';

function PlaceHomePage({ placeSlug }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getPlaceIsLoading);
  const placeData = useSelector(getPlaceData);
  React.useEffect(() => {
    dispatch(fetchPlaceData(placeSlug));
  }, [placeSlug, dispatch]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <SyncLoader
          size={15}
          margin={5}
          color={styleConstants.primaryColor}
          loading={isLoading}
        />
      </LoaderContainer>
    );
  }

  return (
    <LoaderContainer>
      <p>data fetched: {placeData.name}</p>
    </LoaderContainer>
  );
}

PlaceHomePage.propTypes = {
  placeSlug: PropTypes.string.isRequired,
};

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default PlaceHomePage;
