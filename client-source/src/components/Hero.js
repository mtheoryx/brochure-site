import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BaseHero = ({ heroImage, className, content }) => (
  <div className={className}>
    <h1>{content}</h1>

    <Img fluid={heroImage} />
  </div>
);

const HeroHeader = styled(BaseHero)`
  position: relative;
  width: 100%;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }
`;

export default HeroHeader;
