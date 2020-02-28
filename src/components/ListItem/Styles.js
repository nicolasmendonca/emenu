import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListItemContainer = styled.li`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 4em 0 2em;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  transition: all 0.2s ease-in-out;
  position: relative;
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
`;

export const ListItemMainText = styled.p`
  font-size: 1.2em;
  font-family: 'Nunito';
`;

export const RightArrow = styled(FontAwesomeIcon)`
  position: absolute;
  right: 2em;
  top: 40px;
  transform: translateY(-50%);
`;

export const ListItemImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('${props => props.url}');
  background-size: cover;
  background-position: center;
`;

ListItemImage.propTypes = {
  url: PropTypes.string.isRequired,
};
