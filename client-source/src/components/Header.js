import React from 'react';
import styled from 'styled-components';

const Header = ({ className }) => (
  <div className={className}>
    <div>Header Image Placeholder</div>
  </div>
);

const StyledHeader = styled(Header)`
  border: 1px solid red;
`;

export default StyledHeader;
