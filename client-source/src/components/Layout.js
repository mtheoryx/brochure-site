import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  margin: 2rem auto;
  max-width: 600px;
`;

const PageLayout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

export default PageLayout;
