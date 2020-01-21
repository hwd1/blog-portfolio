import React from "react";
import { graphql } from "gatsby";
import Layout from "./DefaultLayout";
import styled from "styled-components";
const Container = styled.div`
  max-width: 1000px;
  margin: 10em auto;
  img {
    width: 100%;
    height: 560px;
    border-radius: 2px;
  }
  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #333;
    text-transform: capitalize;
    margin-bottom: 0.8em;
  }
  .content {
    padding: 5em;
  }

  .date {
    color: #666;
    text-align: right;
    margin-top: 2em;
    font-size: 14px;
  }
`;
export default function blog({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Container>
        <img
          src={require(`../../static${frontmatter.thumbnail}`)}
          alt={frontmatter.title}
        />
        <div className="content">
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <p className="date">{frontmatter.date}</p>
        </div>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date
        title
        desc
        thumbnail
      }
    }
  }
`;
