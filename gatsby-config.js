module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src/content',
        path: `${__dirname}/src/content/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-nprogress',
  ],
}
