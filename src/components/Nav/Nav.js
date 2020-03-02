import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthenticatedUser } from '../../redux/selectors/users';
import {
  NavContainer,
  UserWrapper,
  UserProfilePic,
  UserName,
  HamburgerIcon,
} from './Styles';

function Nav() {
  const user = useSelector(getAuthenticatedUser);
  return (
    <NavContainer>
      <HamburgerIcon className="fa fa-bars" aria-hidden="true" />
      <UserWrapper>
        <UserName>{user.get('displayName')}</UserName>
        <UserProfilePic image={user.get('photoUrl')} />
      </UserWrapper>
    </NavContainer>
  );
}

export default Nav;
