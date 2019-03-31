const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateWebpackConfig = ({ actions, getConfig, rules }) => {
  const config = getConfig()
  const rawImgRule = rules.images()

  const imgRule = config.module.rules.find(
    rule => rule.test && rule.test.toString() === rawImgRule.test.toString()
  )

  // Override `url-loader` limit so `diamond.png` doesn't get encoded to base64
  imgRule.use[0].options.limit = 2000

  actions.replaceWebpackConfig(config)
}

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
