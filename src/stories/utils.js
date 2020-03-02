import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../redux/createStore';
import ThemeProvider from '../components/ThemeProvider';

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
);

ReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ReduxWrapper };
