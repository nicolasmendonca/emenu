import React from 'react';
import ProductCard, {
  ProductCardsContainer,
} from '../components/ProductCard/ProductCard';

const coffeeImage =
  'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-760w.jpg';

export const CompleteExample = () => (
  <ProductCardsContainer>
    <ProductCard
      image={coffeeImage}
      name="Coffee"
      description="Coffee with milk, cappuccino, frappuccino, sugar, cinnamon"
      price={79.99}
    />
  </ProductCardsContainer>
);

export const WithoutImage = () => (
  <ProductCardsContainer>
    <ProductCard
      name="Coffee"
      description="Coffee with milk, cappuccino, frappuccino, sugar, cinnamon"
      price={79.99}
    />
  </ProductCardsContainer>
);
export const WithoutDescription = () => (
  <ProductCardsContainer>
    <ProductCard image={coffeeImage} name="Coffee" price={79.99} />
  </ProductCardsContainer>
);

export const WithoutImageNorDescription = () => (
  <ProductCardsContainer>
    <ProductCard name="Coffee" price={79.99} />
  </ProductCardsContainer>
);

export const Combined = () => (
  <ProductCardsContainer>
    <ProductCard
      image={coffeeImage}
      name="Coffee"
      description="Coffee with milk, cappuccino, frappuccino, sugar, cinnamon"
      price={79.99}
    />
    <ProductCard name="Coffee" description={'a'.repeat(200)} price={79.99} />
    <ProductCard
      name="Coffee"
      description={'long text '.repeat(20)}
      price={79.99}
    />
    <ProductCard image={coffeeImage} name="Coffee" price={79.99} />
    <ProductCard name="Coffee" price={79.99} />
    <ProductCard
      image={coffeeImage}
      name="Coffee"
      description="Coffee with milk, cappuccino, frappuccino, sugar, cinnamon"
      price={79.99}
    />
  </ProductCardsContainer>
);

export default {
  title: 'ProductCard',
};
