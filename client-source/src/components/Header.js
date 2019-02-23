import React from 'react';
import styled from 'styled-components';

const BaseHeader = ({ className }) => (
  <div className={className}>
    <div>Header Image Placeholder</div>
  </div>
);

const Header = styled(BaseHeader)`
  border: 1px solid red;
`;

export default Header;
