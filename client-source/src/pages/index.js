import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import StyledNavigation from '../components/Navigation';
import ContextContent from '../data/context-content';
import PageLayout from '../components/Layout';
import StyledHeader from '../components/Header';
import Footer from '../components/Footer';

const isProd = process.env.NODE_ENV === 'production';

const content =
  process.env.NODE_ENV !== 'production'
    ? ContextContent.demo
    : ContextContent.prod;

const PageContent = ({ heroImage }) => (
  <div className="page">
    <div className="page-hero">
      <h1>{content.company}</h1>
      <Img fluid={heroImage} />
    </div>
    <div className="page-content">
      <p>
        I gave it a cold? I gave it a virus. A computer virus. I gave it a cold?
        I gave it a virus. A computer virus. You know what? It is beets. I've
        crashed into a beet truck. God creates dinosaurs. God destroys
        dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.
      </p>
      <p>
        This thing comes fully loaded. AM/FM radio, reclining bucket seats,
        and... power windows. Do you have any idea how long it takes those cups
        to decompose. Is this my espresso machine? Wh-what is-h-how did you get
        my espresso machine? You know what? It is beets. I've crashed into a
        beet truck.
      </p>
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const IndexPage = ({ data }) => (
  <PageLayout>
    <StyledHeader />
    <StyledNavigation />
    <StyledPageContent
      heroImage={
        isProd
          ? data.prodHero.childImageSharp.fluid
          : data.demoHero.childImageSharp.fluid
      }
    />
    <Footer />
  </PageLayout>
);

export const query = graphql`
  query {
    demoHero: file(relativePath: { eq: "home-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    prodHero: file(relativePath: { eq: "prod-home-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
