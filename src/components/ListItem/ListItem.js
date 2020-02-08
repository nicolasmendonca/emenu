import React from 'react';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';
import {
  ListItemContainer,
  ListItemMainText,
  ListItemImage,
  RightArrow,
} from './Styles';

function ListItem({ mainText, imageUrl, linkTo }) {
  return (
    <Link to={linkTo}>
      <ListItemContainer>
        <ListItemMainText>{mainText}</ListItemMainText>
        {imageUrl && <ListItemImage url={imageUrl} />}
        <RightArrow icon={faChevronRight} />
      </ListItemContainer>
    </Link>
  );
}

ListItem.propTypes = {
  mainText: PropTypes.string,
  imageUrl: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
  mainText: '-',
  imageUrl: null,
};

export default ListItem;
