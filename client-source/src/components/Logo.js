import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BaseLogo = ({ data, className }) => (
  <div className={className}>
    <Link to="/">
      <Img fixed={data.logo.childImageSharp.fixed} />
    </Link>
  </div>
);

const Logo = styled(BaseLogo)`
  /* border: 1px solid red; */
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "indy_steel_logo.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Logo data={data} {...props} />}
  />
);
