import React from 'react';
import { CarouselHolder, ImageHolder, Image } from './Styles';

function Carousel() {
  const imageList = [
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
    'https://ichef.bbci.co.uk/news/410/cpsprodpb/134E3/production/_105057097_a226d870-cc5f-4043-9f4b-d452b75cc280.jpg',
  ];
  // const [images, setImages] = useState(imageList);

  return (
    <CarouselHolder>
      {imageList.map(image => (
        <ImageHolder>
          <Image src={image} draggable="false" />
        </ImageHolder>
      ))}
    </CarouselHolder>
  );
}

export default Carousel;
