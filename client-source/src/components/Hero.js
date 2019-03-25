import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BaseHero = ({ heroImage, className, content }) => (
  <div className={className}>
    <div className="heading-background">
      <h1>{content}</h1>
    </div>
    {heroImage && <Img fluid={heroImage} />}
  </div>
);

const HeroHeader = styled(BaseHero)`
  position: relative;
  width: 100%;

  div.heading-background {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    margin: 5px;
    max-width: 500px;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 10px #001635;
    text-align: center;
    text-transform: uppercase;
    font-size: 4em;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0;
  }
`;

export default HeroHeader;
