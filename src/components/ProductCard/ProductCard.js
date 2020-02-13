import React from 'react';
import PropTypes from 'prop-types';
import { ProductCardColumn, ProductCardsContainer } from './Styles';

const ProductCard = ({ image, name, description, price }) => (
  <ProductCardColumn>
    <div className="product-card-container">
      {image && <img alt="coffee" src={image} />}
      <div className="card-body">
        <h3 className="product-name">{name}</h3>
        {description && <p className="description">{description}</p>}
      </div>
      <hr />
      <p className="price">$ {price}</p>
    </div>
  </ProductCardColumn>
);

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  image: null,
  description: null,
};

export { ProductCardsContainer };

export default ProductCard;
