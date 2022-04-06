const path = require('path');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  [...new Array(1000)].map((_, index) => {
    createPage({
      path: index === 0 ? `/contributors` : `/contributors/${index + 1}`,
      component: path.resolve("./src/components/main/main.tsx"),
      context: {
        page: index + 1,
      },
    })
  })
}
// You can delete this file if you're not using it
