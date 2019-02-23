import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StyledLayout = styled.div`
  margin: 2rem auto;
  /* max-width: 600px; */
`;

const PageLayout = ({ children }) => (
  <StyledLayout>
    <Navigation />
    <Header />
    {children}
    <Footer />
  </StyledLayout>
);

export default PageLayout;
