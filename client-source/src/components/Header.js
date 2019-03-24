import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import PhoneNumber from './PhoneNumber';

const BaseSiteMeta = ({ className, content }) => (
  <div className={className}>
    <div className="contact">
      <PhoneNumber phone={content.phone} />
      <div className="signin">Sign-in</div>
    </div>

    <Navigation />
  </div>
);

const SiteMeta = styled(BaseSiteMeta)`
  .contact {
    display: flex;
    justify-content: flex-end;
  }
  .signin {
    margin-left: 10px;
  }
`;

const BaseHeader = ({ className, content }) => (
  <div className={className}>
    <Logo />
    <SiteMeta content={content} />
  </div>
);

const Header = styled(BaseHeader)`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

export default Header;
