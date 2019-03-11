import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageLayout from '../components/Layout';
import HeroHeader from '../components/Hero';

const PageContent = ({ heroImage, className, content }) => (
  <div className={className}>
    <HeroHeader heroImage={heroImage} content={content.who.heading} />
    <div className="page-content">
      {content.who.bodyText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const WhoWeArePage = ({ data, content }) => (
  <PageLayout>
    <StyledPageContent
      heroImage={data.file.childImageSharp.fluid}
      content={content}
    />
  </PageLayout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "hero-who-we-are.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default WhoWeArePage;
