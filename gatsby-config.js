const siteMetadata = require('./site-metadata')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-netlify-cms-paths',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants'
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: 'Content Manager - RMIT ITF Taekwon-Do'
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-nprogress',
  ],
}
