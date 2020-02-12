import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from '../redux/createStore';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';
import PlaceHomePage from '../pages/PlaceHomePage';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <Router>
        <MainPage path="/" />
        <PlaceHomePage path="/:placeSlug" />
        <CategoryPage path="categories/:categoryId" />
      </Router>
    </Provider>
  );
}

export default App;
