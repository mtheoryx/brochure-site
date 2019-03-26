import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BaseSpotlight = ({ data, className, content }) => (
  <div className={className}>
    <div>
      <span>
        {content.title}: {content.project}
      </span>
      {content.bodyText.map((text, index) => (
        <p>{text}</p>
      ))}
      <button>Read More</button>
    </div>
    <div>
      <Img fixed={data.project.childImageSharp.fixed} />
    </div>
  </div>
);

const Spotlight = styled(BaseSpotlight)`
  width: 100%;
  background-color: #ccc;
  display: flex;
  min-height: 200px;
  height: 200px;
`;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        project: file(relativePath: { eq: "spotlight-merchants.jpg" }) {
          childImageSharp {
            fixed(width: 230) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => <Spotlight data={data} {...props} />}
  />
);
