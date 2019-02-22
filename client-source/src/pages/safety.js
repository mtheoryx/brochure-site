import React from 'react';
import StyledNavigation from '../components/Navigation';
import PageLayout from '../components/Layout';
import StyledHeader from '../components/Header';
import Footer from '../components/Footer';

const PageContent = () => (
  <div>
    <h1>Safety</h1>
  </div>
);

const SafetyPage = () => (
  <PageLayout>
    <StyledHeader />
    <StyledNavigation />
    <PageContent />
    <Footer />
  </PageLayout>
);

export default SafetyPage;
