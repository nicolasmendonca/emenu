import React from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from '../redux/createStore';
import CategoryPage from '../pages/CategoryPage';
import PlaceHomePage from '../pages/PlaceHomePage';
import ThemeProvider from './ThemeProvider';
import { ResetCSS } from '../GenericStyles';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <ThemeProvider>
        <ResetCSS />
        <Router>
          <PlaceHomePage path="/:placeSlug" />
          <CategoryPage path="/:placeSlug/:categorySlug" />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
