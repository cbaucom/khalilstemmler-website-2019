
module.exports = (graphql) => {
  return graphql(`
    {
      allMarkdownRemark(
        filter: { 
          frontmatter: { 
            templateKey: { eq: "wiki" },
          }
        }
      ) {
        edges {
          node {
            id
            html
            excerpt(pruneLength: 160)
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              date
              updated
              wikitags
              name
              prerequisites
              wikicategory
            }
          }
        }
      }
    }
  `)
}