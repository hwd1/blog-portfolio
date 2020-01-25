import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 5em 5em 7em 5em;
  box-sizing: border-box;
  background: #f9f9f9;
  h2 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    color: #333;
    margin-bottom: 1em;
  }
  .flex-images {
    display: flex;
  }
  img {
    width: 20%;
    height: 300px;
  }
  .carousel-indicators li {
    background-color: #2d0a2e;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    border: 0px;
  }
  .carousel-indicators {
    bottom: -3.5em;
  }
  @media only screen and (max-width: 1300px) {
    padding: 5em 0em 7em 0em;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
function ImageSection() {
  return (
    <Container>
      <h2>Section Title</h2>
      <Carousel controls={false} interval={10000}>
        <Carousel.Item>
          <div className="flex-images">
            <img src={require(`../images/img1.jpg`)} alt="flex" />
            <img src={require(`../images/img2.jpg`)} alt="flex" />
            <img src={require(`../images/img3.jpg`)} alt="flex" />
            <img src={require(`../images/img4.jpg`)} alt="flex" />
            <img src={require(`../images/img5.jpg`)} alt="flex" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex-images">
            <img src={require(`../images/img1.jpg`)} alt="flex" />
            <img src={require(`../images/img2.jpg`)} alt="flex" />
            <img src={require(`../images/img3.jpg`)} alt="flex" />
            <img src={require(`../images/img4.jpg`)} alt="flex" />
            <img src={require(`../images/img5.jpg`)} alt="flex" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageSection;
