import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
  margin: 0em 1em 2.5em 1em;
  background: #fcfcfc;
  transition: all 0.8s;
  &:hover {
    background: #f4f4f4;
  }
  img {
    width: 302px;
    height: 200px;
    border-radius: 2px;
  }
  h5 {
    margin-top: 0.7em;
    padding: 0px 10px;
  }
  p {
    text-align: justify;
    color: #3c484e;
    line-height: 1.4em;
    padding: 0px 10px;
  }
  .time {
    color: #666;
    text-align: right;
    margin-top: -1em;
    font-size: 14px;
  }
`;

function BlogCard({ img, title, desc, date }) {
  return (
    <Container>
      <img src={require(`../images/${img}`)} alt={title} />
      <h5>{title}</h5>
      <p className="desc">{desc}</p>
      <p className="time">{date}</p>
    </Container>
  );
}

export default BlogCard;
