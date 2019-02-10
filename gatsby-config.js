module.exports = {
  siteMetadata: {
    title: `Huiyeon Kim - Software Developer | Tech Enthusiast | Writer`,
    description: `Welcome to my personal portfolio! Come and see who I am, what I did and what I can do. Check out my Contacts section to contact for any enquiries.`,
    author: `@huiyeonkim`,
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Covered By Your Grace`,
          ]
        }
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
