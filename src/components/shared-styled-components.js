import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ListItemContainer = styled.div`
  border-top: 1px solid black;

  a {
    text-decoration: none;
    color: initial;
  }
`;

export const Title = styled.h1`
  background-color: ${props => props.theme.mainTitleBg};
  font-size: 1.4em;
  font-family: 'Nunito';
  padding: 1em;
  margin: 0;
  font-weight: bold;
`;
