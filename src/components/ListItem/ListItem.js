import React from 'react';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  ListItemContainer,
  ListItemMainText,
  ListItemImage,
  RightArrow,
} from './Styles';

function ListItem({ mainText, imageUrl }) {
  return (
    <ListItemContainer>
      <ListItemMainText>{mainText}</ListItemMainText>
      {imageUrl && <ListItemImage url={imageUrl} />}
      <RightArrow icon={faChevronRight} />
    </ListItemContainer>
  );
}

ListItem.propTypes = {
  mainText: PropTypes.string,
  imageUrl: PropTypes.string,
};
ListItem.defaultProps = {
  mainText: '-',
  imageUrl: null,
};

export default ListItem;
