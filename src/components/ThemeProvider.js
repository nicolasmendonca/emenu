import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { getActiveTheme } from '../redux/selectors/themes';

const ThemeProvider = ({ children }) => {
  const theme = useSelector(getActiveTheme);
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
