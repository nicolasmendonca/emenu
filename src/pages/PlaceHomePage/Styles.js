import styled from 'styled-components';

export const PageWrapper = styled.main`
  height: 100vh;
  background-color: ${props => props.theme.lighterBgColor};
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 6px 12px;
`;
