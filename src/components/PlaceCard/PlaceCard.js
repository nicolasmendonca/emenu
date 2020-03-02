import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImage, CardBodyDetail } from './styles';

const PlaceCard = ({ placeName, location, photoUrl }) => (
  <Card chooseable>
    <CardTitle>{placeName}</CardTitle>
    <CardImage image={photoUrl} />
    <CardBodyDetail>
      <i className="fa fa-map-marker" aria-hidden="true" />
      {location}
    </CardBodyDetail>
  </Card>
);

PlaceCard.propTypes = {
  placeName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default PlaceCard;
