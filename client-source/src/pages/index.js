import React from 'react';
import StyledNavigation from '../components/Navigation';
import ContextContent from '../data/context-content';

const content =
  process.env.NODE_ENV !== 'production'
    ? ContextContent.demo
    : ContextContent.prod;

const IndexPage = () => (
  <div>
    <h1>{content.company}</h1>
    <StyledNavigation />
    Are we production with correct env? {process.env.NODE_ENV}
  </div>
);

export default IndexPage;
