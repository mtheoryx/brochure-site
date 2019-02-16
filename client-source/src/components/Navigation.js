import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNavigation = styled(Navigation)`
  a.active {
    color: red;
  }
`;

function Navigation({ className }) {
  return (
    <nav className={className}>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/projects/" activeClassName="active">
        Projects
      </Link>
      <Link to="/about/" activeClassName="active">
        About
      </Link>
      <Link to="/contact/" activeClassName="active">
        Contact
      </Link>
    </nav>
  );
}

export default StyledNavigation;
