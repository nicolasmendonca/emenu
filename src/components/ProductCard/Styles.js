import styled from 'styled-components';

export const ProductCardsContainer = styled.div`
  width: 100%;
  column-width: 320px;
  column-gap: 1em;
`;

export const ProductCardColumn = styled.div`
  -webkit-column-break-inside: avoid;
  display: inline-block;
  min-width: 320px;
  font-family: 'Nunito', sans-serif;
  text-align: initial;
  margin: 1em;
  box-shadow: 1px 6px 11px 0px #c7c7c7;
  background-color: white;
  animation: 0.2s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  img {
    max-width: 100%;
    border-radius: 2px;
    margin-bottom: 1em;
  }

  p.price {
    position: absolute;
    right: 1em;
    bottom: 1em;
    font-weight: bold;
    margin: 0;
  }

  hr {
    margin: 1em 0;
  }

  .card-body {
    position: relative;

    .product-name {
      font-size: 1.5em;
      margin: 0;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }

  .product-card-container {
    padding: 1em 1em 2.5em 1em;
    position: relative;
  }
`;
