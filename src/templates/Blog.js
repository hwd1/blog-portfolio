import React from "react";
import { graphql } from "gatsby";
import Layout from "./DefaultLayout";
import styled from "styled-components";
const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: auto;
`;
export default function blog({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <Container>
        <h1>{frontmatter.title}</h1>
        <image src={frontmatter.thumbnail} />
        <h2>{frontmatter.date}</h2>
        <h2>{frontmatter.desc}</h2>
        <h2>{frontmatter.body}</h2>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { title: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM/DD/YYYY")
        title
        desc
        thumbnail
        body
      }
    }
  }
`;
