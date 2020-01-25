import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
const Container = styled.div`
  box-sizing: border-box;
  padding: 0em 1em 2em 1em;
  .aside-img {
    width: 100%;
    height: 25vw;
    max-height: 400px;
    border-radius: 3px;
  }
  .tags {
    word-break: break-all;
    padding: 0em 1.3em;
    text-align: center;
  }
  .tags li {
    margin: 0px 6px;
    border-radius: 4px;
    margin-bottom: 10px;
    padding: 4px 0px;
    display: inline-block;
    margin-bottom: 2em;
  }
  .tags li span {
    border: 1px solid #621367;
    padding: 4px 10px;
    border-radius: 4px;
  }
  .tags li span:hover {
    background-color: transparent !important;
  }
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.5em;
  }
  .categories {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 0em 1em;
    margin: 5em 0em;
    p {
      padding: 1em 0em;
      font-weight: 600;
      font-size: 14px;
      color: #444;
      font-weight: 600;
      text-align: center;
      background: #f2f2f2;
      border-radius: 3px;
      margin: 0.3em 2.5em 0.3em 2.5em;
    }
  }
  svg {
    fill: #499df3;
    margin-bottom: 1em;
  }
  h4 {
    color: #499df3;
    font-size: 18px;
    margin-top: 1em;
  }
  .text {
    text-align: justify;
    font-weight: 500;
    color: #444;
  }
  .testimony-text {
    padding: 0em 1em;
  }
  a {
    margin-bottom: 0em !important;
  }
  @media only screen and (max-width: 720px) {
    max-width: 400px;
    margin: auto;
    .aside-img {
      height: 100vw;
    }
  }
`;
function Aside() {
  return (
    <Container>
      <img src={require(`../images/men.jpg`)} alt="men" className="aside-img" />
      <div className="testimony-text">
        <h4>John Doe</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        </svg>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s ...
        </p>{" "}
      </div>
      <div className="categories">
        <h5>categories</h5>
        <Link to="./blogs">
          <p>Education</p>
        </Link>
        <Link to="./blogs">
          <p>Design</p>
        </Link>
        <Link to="./blogs">
          <p>Nature</p>
        </Link>
        <Link to="./blogs">
          <p>Personal Life</p>
        </Link>
        <Link to="./blogs">
          <p>Sience</p>
        </Link>
      </div>
      <div className="tags">
        <h5>tags</h5>
        <Link to="./blogs">
          <li>
            <span>php</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>html</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>css</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>php</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>wordpress</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>React</span>
          </li>
        </Link>
        <Link to="./blogs">
          <li>
            <span>Javascript</span>
          </li>
        </Link>
      </div>
    </Container>
  );
}

export default Aside;
