module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio`,
    author: `Mouaad Boukiaou`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blogs`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    }
  ]
};
