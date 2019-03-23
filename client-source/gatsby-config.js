const path = require(`path`);

const isStream = process.env.GATSBY_IS_STREAM === 'true';

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(
          __dirname,
          `src`,
          `images`,
          `${isStream ? 'stream' : 'client'}`
        )
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typography`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `in-stl-static-site-bucket`
      }
    }
  ]
};
