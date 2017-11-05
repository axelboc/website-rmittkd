module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src/content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-nprogress',
  ],
}
