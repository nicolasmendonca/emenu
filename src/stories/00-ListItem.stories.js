import React from 'react';
import ListItem from '../components/ListItem/ListItem';
import { ListItemContainer } from '../components/shared-styled-components';

const coffeeImage =
  'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg';

export const WithoutImage = () => (
  <ListItemContainer>
    <ListItem linkTo="/" mainText="Coffee" />
  </ListItemContainer>
);

export const WithImage = () => (
  <ListItemContainer>
    <ListItem linkTo="/" mainText="Coffee" imageUrl={coffeeImage} />
  </ListItemContainer>
);

export default {
  title: 'ListItem',
};
