import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/createStore';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <Carousel />
    </Provider>
  );
}

export default App;
