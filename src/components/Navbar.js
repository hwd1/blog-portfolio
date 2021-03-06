import React, { useState } from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 20;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: auto;
  }
  .logo {
    margin-top: 30px;
    margin-bottom: 10px;
    width: 220px;
    height: 80px;
  }
  li {
    list-style: none;
    color: #333;
    font-weight: 700;
  }
  .nav-li {
    display: inline-block;
    font-size: 14px;
    padding: 0 1em;
  }
  a {
    color: #fff;
    &:hover {
      text-decoration: none;
      color: #000;
    }
  }
  .link {
    color: #333;
    transition: all 0.6s;
    padding: 10px 15px;
    &:hover {
      text-decoration: none;
      color: #fff;
      background: #390b3c;
    }
  }
  .mega-menu {
    background: #390b3c;
    opacity: 0;
    transform: translateY(-5%);
    position: absolute;
    justify-content: space-evenly;
    display: none;
  }
  .droppable {
    position: static;
  }
  .droppable:hover .mega-menu {
    display: flex;
    flex-direction: row;
    transition: all 0.5s;
    transform: translateY(0%);
    opacity: 1;
  }
  .droppable:hover .mega-menu-1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .mega-menu-1 {
    width: 100%;
    left: 0;
    padding: 5em 5em 3em 5em;
    grid-column-gap: 1em;
  }
  .mega-menu-2 {
    justify-content: left;
    padding: 1em 2em 1em 1em;
    ul {
      flex-direction: column;
    }
    li {
      cursor: pointer;
      margin: 1em 0em;
      width: 100%;
      transition: all 0.6s;
      padding: 10px 15px;
      a {
        color: #fff;
      }
      &:hover {
        a {
          color: #000;
        }
        text-decoration: none;
        color: #000;
        background: #fff;
      }
    }
  }
  p {
    height: 20px;
    margin: 20px 0px;
    text-transform: uppercase;
    color: #333;
  }
  img {
    width: 320px;
    height: 240px;
    transition: all 1s;
  }
  @media only screen and (max-width: 768px) {
    .nav-li {
      display: none;
    }
  }
  .carousel-card {
    height: 340px;
    width: 100%;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }
  h4 {
    visibility: visible;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.6s;
    user-select: none;
    letter-spacing: 0.035em;
    vertical-align: baseline;
    font-family: Catamaran, sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    color: #000;
    word-wrap: break-word;
    font-size: 18px;
    padding: 0.198em 0.4em 0.3em;
    line-height: 1.126em;
    background-size: 100% 80%;
    background-repeat: no-repeat;
    background: #fff;
    position: relative;
    top: 260px;
    width: 80%;
    margin: 0 10%;
    &:hover {
      color: #c35794;
    }
  }
  a {
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  @media only screen and (max-width: 900px) {
    .carousel-card-link:last-child {
      display: none;
    }
    .droppable:hover .mega-menu-1 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
function Navbar({ data, location }) {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const openSideBar = () => {
    toggleSideBar(true);
  };
  return (
    <div>
      <Container>
        <ul>
          <img
            src={require("../images/logo.png")}
            alt="logo"
            className="logo"
          />
        </ul>
        <ul className="second-ul">
          <li className="nav-li">
            <p>
              <Link
                className="link"
                to="/"
                style={
                  location === "/"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Home
              </Link>
            </p>
          </li>
          <li className="droppable nav-li">
            <p>
              <Link
                className="link"
                to="./blogs"
                style={
                  location === "blogs"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Blogs
              </Link>
            </p>
            <div className="mega-menu mega-menu-1">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link
                  to={`/blogs/${node.frontmatter.title.split(" ").join("-")}`}
                  key={node.id}
                  className="carousel-card-link"
                >
                  <div
                    className="carousel-card"
                    style={{
                      backgroundImage: `url(${require(`../../static${node.frontmatter.thumbnail}`)})`
                    }}
                  >
                    <h4>{`This is the title of ${node.frontmatter.title}`}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </li>
          <li className="nav-li">
            <p>
              <Link
                to="./About"
                className="link"
                style={
                  location === "about"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                ABOUT
              </Link>
            </p>
          </li>
          <li className="nav-li">
            <p>
              <Link
                to="./Contact"
                className="link"
                style={
                  location === "contact"
                    ? { color: "#fff", background: "#390b3c" }
                    : {}
                }
              >
                Contact
              </Link>
            </p>
          </li>
          <li className="droppable nav-li">
            <p>
              <a className="link">Follow</a>
            </p>
            <div className="mega-menu mega-menu-2">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkden
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li
            onClick={() => openSideBar()}
            style={{ position: "absolute", right: "5em", marginTop: "0.6em" }}
          >
            <Hamburger />
          </li>
        </ul>
      </Container>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
}

export default ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 4
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
    `}
    render={data => <Navbar data={data} location={location} />}
  />
);
