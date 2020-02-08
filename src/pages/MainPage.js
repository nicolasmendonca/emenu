import React from 'react';
import ListItem from '../components/ListItem/ListItem';
import { PageH1 } from '../GenericStyles';

function MainPage() {
  return (
    <>
      <PageH1>Choose a Category</PageH1>
      <ListItem
        mainText="Cafeteria"
        imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        linkTo="/categories/Cafeteria"
      />
    </>
  );
}

export default MainPage;
