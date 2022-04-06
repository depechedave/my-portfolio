exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            holding {
              features {
                desc
                name
              }
            }
            slug
            stack
            title
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: "/projects/" + slug,
      component: require.resolve("./src/templates/project-details.js"),
      context: { slug: slug },
    })
  })
}
