import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: ${props => props.theme.lighterBgColor};
  padding: 12px;
  height: 44px;
  font-family: 'Nunito', sans-serif;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    top: 64px;
    left: 0;
    background: ${props => props.theme.primaryColor};
    background: linear-gradient(
      90deg,
      ${props => props.theme.primaryColor} 0%,
      ${props => props.theme.secondaryColor} 100%
    );
  }
`;

export const HamburgerIcon = styled.i`
  padding: 10px 12px;
  position: absolute;
  left: 24px;
  font-size: 22px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  color: black;

  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  position: absolute;
  right: 24px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const UserName = styled.p`
  font-family: 'Nunito', sans-serif;
  margin: 0 6px;
`;

export const UserProfilePic = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 12px;
  background-image: url('${props => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
