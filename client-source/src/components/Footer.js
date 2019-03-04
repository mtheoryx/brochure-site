import React from 'react';
import styled from 'styled-components';

const BaseFooter = ({ className }) => (
  <div className={className}>
    <p>I'm a footer</p>
  </div>
);

const Footer = styled(BaseFooter)`
  border: 1px solid green;
`;

export default Footer;
