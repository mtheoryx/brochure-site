import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import ContextContent from '../data/context-content';
import PageLayout from '../components/Layout';

const content =
  process.env.GATSBY_IS_STREAM === 'true'
    ? ContextContent.stream
    : ContextContent.client;

const PageContent = ({ heroImage, className }) => (
  <div className={className}>
    <div className="page-hero">
      <h1>{content.company}</h1>

      <Img fluid={heroImage} />
    </div>
    <div className="page-content">
      {content.home.bodyText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const IndexPage = ({ data }) => (
  <PageLayout>
    <StyledPageContent heroImage={data.file.childImageSharp.fluid} />
  </PageLayout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "home-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
