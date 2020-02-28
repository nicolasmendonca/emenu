import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from '../redux/createStore';
import CategoryPage from '../pages/CategoryPage';
import PlaceHomePage from '../pages/PlaceHomePage';
import LoginPage from '../pages/LoginPage/LoginPage';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <Router>
        <LoginPage path="/login" />
        <PlaceHomePage path="/:placeSlug" />
        <CategoryPage path="/:placeSlug/:categorySlug" />
      </Router>
    </Provider>
  );
}

export default App;
