import React from 'react';
import ListItem from '../components/ListItem/ListItem';

function CategoryPage({ categoryId }) {
  return (
    <>
      <h1>{categoryId}</h1>
      <ListItem
        mainText="Cafe"
        imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        linkTo="/"
      />
    </>
  );
}

export default CategoryPage;
