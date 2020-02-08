import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/createStore';
import ListItem from './ListItem/ListItem';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <div className="App">
        <p>This is a test</p>
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
        <ListItem
          mainText="Cafecito"
          imageUrl="https://app.loveat.com.ar/api/categories/30/image"
        />
      </div>
    </Provider>
  );
}

export default App;
