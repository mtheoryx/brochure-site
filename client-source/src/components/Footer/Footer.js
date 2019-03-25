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
  display: flex;
  justify-content: space-between;
  background-color: #2d2d2d;
  padding: 0 10px;
  color: white;
  div:nth-child(2) {
    text-align: center;
  }
  p {
    margin: 0;
  }
`;

export default Footer;
