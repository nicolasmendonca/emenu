import React from 'react';
import Nav from '../components/Nav/Nav';
import { ReduxWrapper } from './utils';

export const LoggedIn = () => (
  <ReduxWrapper>
    <Nav />
  </ReduxWrapper>
);

export default {
  title: 'Admin Nav',
};
