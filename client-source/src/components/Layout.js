import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import StreamContext from '../data/stream-content';
import DataContext from '../data/data-content';

const isStream = process.env.GATSBY_IS_STREAM === 'true';
const content = isStream ? StreamContext : DataContext;

const StyledLayout = styled.div`
  margin: 2rem auto;
  /* max-width: 600px; */
`;

const PageLayout = ({ children }) => (
  <StyledLayout content={content}>
    <Navigation />
    <Header />
    {React.cloneElement(children, { content })}
    <Footer />
  </StyledLayout>
);

export default PageLayout;
