import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BaseNavigation = ({ className }) => (
  <nav className={className}>
    <Link to="/" activeClassName="active">
      Home
    </Link>
    <Link to="/who-we-are/" activeClassName="active">
      Who we are
    </Link>
    <Link to="/what-we-do/" activeClassName="active">
      What we do
    </Link>
    <Link to="/projects/" activeClassName="active">
      Projects
    </Link>
    <Link to="/safety/" activeClassName="active">
      Safety
    </Link>
    <Link to="/quality/" activeClassName="active">
      Quality
    </Link>
    <Link to="/contact-us/" activeClassName="active">
      Contact
    </Link>
  </nav>
);

const Navigation = styled(BaseNavigation)`
  a {
    text-transform: uppercase;
    margin-right: 10px;
    text-decoration: none;
    color: blue;
  }
  a:hover {
    text-decoration: underline;
  }

  a.active {
    color: red;
    text-decoration: underline;
  }
`;

export default Navigation;
