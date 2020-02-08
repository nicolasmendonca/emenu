import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/createStore';

function App() {
  return (
    <Provider data-testid="store-provider" store={store}>
      <div className="App">
        <p>This is a test</p>
      </div>
    </Provider>
  );
}

export default App;
