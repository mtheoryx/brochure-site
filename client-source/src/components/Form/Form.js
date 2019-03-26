import React from 'react';
import styled from 'styled-components';

const BaseForm = ({ className }) => (
  <div className={className}>Contact form</div>
);

const Form = styled(BaseForm)`
  width: 100%;
  display: flex;
  background: #ddd;
  min-height: 100%;
  height: 100%;
`;

export default Form;
