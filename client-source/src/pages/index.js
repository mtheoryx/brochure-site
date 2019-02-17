import React from 'react';
import StyledNavigation from '../components/Navigation';
import ContextContent from '../data/context-content';

const content =
  process.env.NODE_ENV !== 'production'
    ? ContextContent.demo
    : ContextContent.prod;

const Header = () => (
  <div class="header">
    <div>Header Image</div>
  </div>
);

const PageContent = () => (
  <div className="page">
    <div className="page-hero">
      <h1>{content.company}</h1>
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

const Footer = () => <div className="footer">I'm a footer</div>;
const IndexPage = () => (
  <div>
    <Header />
    <StyledNavigation />
    <PageContent />
    <Footer />
  </div>
);

export default IndexPage;
