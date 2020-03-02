import React from 'react';
import styled from 'styled-components';
import PlaceCard from '../PlaceCard/PlaceCard';
import { Card } from '../PlaceCard/styles';

const PlacesGrid = styled.section`
  margin: 16px;
  padding: 24px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
`;

const MyPlaces = () => (
  <Card>
    <PlacesGrid>
      <PlaceCard
        placeName="El taller"
        location="Av. del Libertador 2555"
        photoUrl="http://www.taller.com.ar/img/about/about-ElTaller-Cerveceria.jpg"
      />
      <PlaceCard
        placeName="Cervelar"
        location="Av. Congreso 666"
        photoUrl="https://cervelar.com.ar/img/locales/cabrera_color.jpg"
      />
      <PlaceCard
        placeName="The Temple Bar"
        location="Iberá 6233"
        photoUrl="https://s3-us-west-2.amazonaws.com/esdeargentino.com/wp-content/uploads/2018/10/04213606/temple-ba.jpg"
      />
      <PlaceCard
        placeName="Antares"
        location="Av. Corrientes 123"
        photoUrl="https://media-cdn.tripadvisor.com/media/photo-s/05/6a/39/fa/cerveceria-antares.jpg"
      />
    </PlacesGrid>
  </Card>
);

export default MyPlaces;
