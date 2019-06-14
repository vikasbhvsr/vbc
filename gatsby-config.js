module.exports = {
  siteMetadata: {
    title: `Vaidehi Beauty Care & Spa`,
    description: `Vaidehi Beauty Care & Spa is Ahmedabad (Gujarat) India based leading Parlor offering services like Bridal Make Up, Bridal Makeover, Skin Treatment with Facial, Spa, Hair Cut, Hair Style, Laser Hair Removal etc.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vaidehi Beauty Care`,
        short_name: `VBC`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
