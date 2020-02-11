module.exports = {
  pathPrefix: "/obs-consistent-header",
  siteMetadata: {
    title: "Observability Consistent Header prototype",
    description: "Prototype of the new consistent header in Observability",
    author: "@observability-design"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-eui-starter",
        short_name: "starter",
        start_url: "/",
        background_color: "#F5F7FA",
        theme_color: "#006BB4",
        display: "minimal-ui",
        icon: "src/images/logo_elastic.png" // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
