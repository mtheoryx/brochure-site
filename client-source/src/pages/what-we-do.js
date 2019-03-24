import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PageLayout from '../components/Layout';
import HeroHeader from '../components/Hero';

const PageContent = ({ heroImage, className, content }) => (
  <div className={className}>
    <HeroHeader heroImage={heroImage} content={content.what.heading} />
    <div className="page-content">
      {content.what.bodyText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const WhatWeDoPage = ({ data, content }) => (
  <PageLayout>
    <StyledPageContent
      heroImage={data.header.childImageSharp.fluid}
      content={content}
    />
  </PageLayout>
);

export const query = graphql`
  query {
    header: file(relativePath: { eq: "hero-what-we-do.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default WhatWeDoPage;
