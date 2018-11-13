module.exports = {
  siteMetadata: {},
  plugins: [
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('postcss-import')(),
          require('postcss-preset-env')({
            features: {
              'nesting-rules': true,
              'custom-properties': {
                importFrom: 'src/styles/vars.css'
              }
            }
          }),
          require('postcss-browser-reporter')(),
          require('postcss-reporter')(),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/uploads`,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-nprogress',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: 'Content Manager - RMIT ITF Taekwon-Do'
      },
    },
  ],
}
