import React from 'react';
import styled from 'styled-components';

const Layout = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const PageLayout = styled(Layout)`
  margin: 2rem auto;
  max-width: 750px;
  /* TODO Flex/Grid layout */
`;

export default PageLayout;
