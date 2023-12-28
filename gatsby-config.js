/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `profile`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Stephen Cole Bowen's professional portfolio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/site-icon.png',
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
};
