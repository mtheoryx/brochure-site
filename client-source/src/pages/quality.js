import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageLayout from '../components/Layout';
import HeroHeader from '../components/Hero';

const PageContent = ({ heroImage, className, content }) => (
  <div className={className}>
    <HeroHeader heroImage={heroImage} content={content.quality.heading} />
    <div className="page-content">
      {content.quality.bodyText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const QualityPage = ({ data, content }) => (
  <PageLayout>
    <StyledPageContent
      heroImage={data.file.childImageSharp.fluid}
      content={content}
    />
  </PageLayout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "hero_quality.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default QualityPage;
