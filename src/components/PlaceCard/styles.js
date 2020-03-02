import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-shadow: 1px 6px 11px 0 ${props => props.theme.shadowColor};
  transition: transform 0.15s ease-in-out;
  overflow: hidden;
  border-radius: 3px;
  background-color: ${props => props.theme.lighterBgColor};
  cursor: ${props => (props.chooseable ? 'pointer' : 'default')};
`;

export const CardImage = styled.div`
background-image: url('${props => props.image}');
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 240px;
`;

export const CardTitle = styled.h2`
  font-size: 1.75em;
  font-family: 'Nunito', sans-serif;
  color: ${props => props.theme.lighterBgColor};
  position: absolute;
  padding: 12px;
  margin: 0;
  text-shadow: 3px 3px 6px black;
`;

export const CardBodyDetail = styled.p`
  font-family: 'Nunito', sans-serif;
  padding: 12px;
  margin: 0;
  color: white;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  text-shadow: 3px 3px 6px black;

  i {
    margin: 0 8px;
  }
`;
