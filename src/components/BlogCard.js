import React from "react";
import styled from "styled-components";

function BlogCard({ img, title, desc, date, width, height }) {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${width ? width : "290px"};
    height: ${height ? height : "100%"};
    margin: 0em 1em 0em 1em;
    background: #fcfcfc;
    transition: all 0.8s;
    &:hover {
      background: #f4f4f4;
    }
    img {
      width: ${width ? width : "290px"};
      height: 250px;
      border-radius: 3px;
    }
    h5 {
      margin-top: 0.7em;
      padding: 0px 10px;
      text-transform: capitalize;
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
      font-size: 14px;
    }
    @media only screen and (max-width: 400px) {
      width: 300px;
      margin: 0em;
    }
    img {
      width: 300px;
    }
  `;

  return (
    <Container>
      <img src={require(`../../static${img}`)} alt={title} />
      <h5>{title}</h5>
      <p className="desc">{desc}</p>
      <p className="time">{date}</p>
    </Container>
  );
}

export default BlogCard;
