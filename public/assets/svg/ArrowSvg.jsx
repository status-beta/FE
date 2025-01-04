import React from 'react';
import styled from 'styled-components';

const ArrowSvg = ({ _width = '12', _height = '8' }) => {
  return (
    <Svg width={_width} height={_height} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default ArrowSvg;

const Svg = styled.svg.attrs((props) => ({}))``;
