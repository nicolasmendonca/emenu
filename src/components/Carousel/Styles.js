import styled from 'styled-components';

export const CarouselHolder = styled.div`
  width: 100%;
  height: auto;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  /* width */
  ::-webkit-scrollbar {
    height: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ImageHolder = styled.a`
  width: 200px;
  overflow: hidden;
  margin: 10px 20px 5px 20px;
  display: inline-block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
`;
