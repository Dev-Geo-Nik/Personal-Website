/** @type {import('gatsby').GatsbyConfig} */


module.exports = {
  
  siteMetadata: {
    defaultTitle: `George Nikolaidis`,
    description: `Front-end developer portfolio website`,
    titleTemplate :`%s | George Nikolaidis`,
    author: `George Nikolaidis`,
    siteUrl: `https://georgenikolaidis.com`,
    defaultImage:"",
    twitterUsername:"@username"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/Logo.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
