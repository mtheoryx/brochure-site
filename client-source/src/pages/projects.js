import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/Layout';
import HeroHeader from '../components/Hero';

const PageContent = ({ className, content }) => (
  <div className={className}>
    <HeroHeader content={content.projects.heading} />
    <div className="page-content">
      {content.projects.bodyText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  </div>
);

const StyledPageContent = styled(PageContent)`
  border: '1px solid #ccc';
`;

const ProjectPage = ({ content }) => (
  <PageLayout>
    <StyledPageContent content={content} />
  </PageLayout>
);

export default ProjectPage;
