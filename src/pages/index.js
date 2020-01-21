import React from "react";
import Carousel from "../components/MyCarousel";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
const Container = styled.div`
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: auto;
    margin-top: 10em;
    margin-bottom: 10em;
  }
  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <Container>
      <Layout>
        <Carousel />
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
              />
            </Link>
          ))}
        </div>
      </Layout>
    </Container>
  );
};
export default IndexPage;

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
          }
        }
      }
    }
  }
`;
