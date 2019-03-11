import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

import StreamContext from '../data/stream-content';
import DataContext from '../data/data-content';

const isStream = process.env.GATSBY_IS_STREAM === 'true';
const content = isStream ? StreamContext : DataContext;

const StyledLayout = styled.div`
  margin: 0 auto;
  width: 98vw;
`;

const PageLayout = ({ children }) => (
  <StyledLayout content={content}>
    <Header content={content} />
    {React.cloneElement(children, { content })}
    <Footer />
  </StyledLayout>
);

export default PageLayout;
