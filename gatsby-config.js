module.exports = {
  siteMetadata: {
    title: `Software Developer | Tech Enthusiast | Writer`,
    description: `Welcome to my personal portfolio! Come and see who I am, what I did and what I can do. Check out my Contacts section to contact for any enquiries.`,
    author: `@huiyeonkim`,
    siteUrl: `https://huiyeonkim.com`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: false, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,500,700`,
          `Thasadith`, // you can also specify font weights and styles
          `Crimson Text`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Huiyeon Kim: Developer, Tech Enthusiast`,
        short_name: `Huiyeon Kim`,
        start_url: `/`,
        background_color: `#192bc2`,
        theme_color: `#192bc2`,
        display: `standalone`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
  ],
}
