import React from 'react';
import styled from 'styled-components';

const BaseFooter = ({ className, content }) => (
  <div className={className}>
    <div>
      <p>Something</p>
    </div>
    <div>
      {content.address.map((addressLine, index) => (
        <p key={index}>{addressLine}</p>
      ))}
    </div>
    <div>
      <p>Image</p>
    </div>
  </div>
);

const Footer = styled(BaseFooter)`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  div:nth-child(2) {
    text-align: center;
  }
  p {
    margin: 0;
  }
`;

export default Footer;
