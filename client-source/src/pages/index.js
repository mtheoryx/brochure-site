import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PageLayout from '../components/Layout';
import HeroHeader from '../components/Hero';
import Form from '../components/Form/Form';
import SpotLight from '../components/SpotLight/SpotLight';

const PageContent = ({ heroImage, className, content }) => (
  <div className={className}>
    <HeroHeader heroImage={heroImage} content={content.company} />
    <div className="page-content">
      <div className="column">
        <div className="spotlight">
          <SpotLight content={content.spotlight} />
        </div>
        <div className="home-content">
          {content.home.bodyText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <button className="home-button">{content.home.button}</button>
        </div>
      </div>
      <div className="column">
        <Form className="form" />
      </div>
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
  .page-content {
    display: flex;
    align-items: stretch;

    .home-button {
      text-transform: uppercase;
      color: red;
    }
  }

  .column {
    width: 50%;
  }

  .home-content {
    display: flex;
    flex-direction: column;
    min-height: 200px;
    height: 200px;
  }
`;

const IndexPage = ({ data, content }) => (
  <PageLayout>
    <StyledPageContent
      heroImage={data.header.childImageSharp.fluid}
      content={content}
    />
  </PageLayout>
);

export const query = graphql`
  query {
    header: file(relativePath: { eq: "hero-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
