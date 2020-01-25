import React from "react";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
const Container = styled.div`
  width: 100%;
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: auto;
    margin-bottom: 5em;
    margin-top: 300px;
  }
  a {
    color: inherit;
    margin-bottom: 2em;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Blogs = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <Container>
      <Layout location="blogs">
        <div className="blogs">
          {edges.map(({ node }) => (
            <Link
              to={`/blogs/${node.frontmatter.title.split(" ").join("-")}`}
              key={node.id}
            >
              <BlogCard
                title={node.frontmatter.title}
                img={node.frontmatter.thumbnail}
                desc={node.frontmatter.desc}
                date={node.frontmatter.date}
                width="350px"
              />
            </Link>
          ))}
        </div>
      </Layout>
    </Container>
  );
};
export default Blogs;

export const blogs = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
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
            desc
            thumbnail
            category
            tags
          }
        }
      }
    }
  }
`;
