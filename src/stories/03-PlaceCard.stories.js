import React from 'react';
import { ReduxWrapper } from './utils';
import PlaceCard from '../components/PlaceCard/PlaceCard';

export const CompleteExample = () => (
  <ReduxWrapper>
    <PlaceCard
      placeName="El taller"
      location="Av. del Libertador 2555"
      photoUrl="http://www.taller.com.ar/img/about/about-ElTaller-Cerveceria.jpg"
    />
  </ReduxWrapper>
);

export default {
  title: 'Place Card',
};
