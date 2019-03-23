import React from 'react';
import styled from 'styled-components';

const BasePhoneNumber = ({ className, phone }) => (
  <div className={className}>
    <a href={`tel:+${phone}`}>{phone}</a>
  </div>
);

const PhoneNumber = styled(BasePhoneNumber)`
  color: red;
`;

export default PhoneNumber;
