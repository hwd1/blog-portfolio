const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/Blog.js");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              title
              thumbnail
              desc
              category
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.frontmatter.title.split(" ").join("-")}`,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title,
          img: `${node.frontmatter.thumbnail.replace("/images/uploads/", "")}`
        }
      });
    });
  });
};
