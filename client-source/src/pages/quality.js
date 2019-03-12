import React from 'react';
import styled from 'styled-components';
import PageLayout from '../components/Layout';

const PageContent = ({ className, content }) => (
  <div className={className}>
    <h1>{content.quality.heading}</h1>
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

const QualityPage = ({ content }) => (
  <PageLayout>
    <StyledPageContent content={content} />
  </PageLayout>
);

export default QualityPage;
