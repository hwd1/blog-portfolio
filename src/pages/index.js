import React from "react";
import Carousel from "../components/MyCarousel";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import LatestPosts from "../components/LatestPosts";
import Aside from "../components/Aside";
import ImageSection from "../components/ImageSection";
const Container = styled.div`
  width: 100%;
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: auto;
    margin-bottom: 5em;
  }
  a {
    color: inherit;
    margin-bottom: 2em;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
  .row {
    max-width: 1400px;
    margin: auto;
    margin-top: 10em;
    display: grid;
    grid-gap: 1%;
    grid-template-columns: 70% 29%;
  }
  @media only screen and (max-width: 720px) {
    .row {
      display: block;
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
      <Layout location="/">
        <Carousel />
        <LatestPosts />
        <div className="row">
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
          <Aside />
        </div>
        <ImageSection />
      </Layout>
    </Container>
  );
};
export default IndexPage;

export const blogs = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
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
