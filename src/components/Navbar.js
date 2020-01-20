import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import SideBar from "./SideBar";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  height: 60px;
  background: #2d0a2e;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  li {
    list-style: none;
    color: #fff;
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
    color: #fff;
    transition: all 0.6s;
    padding: 10px 15px;
    &:hover {
      text-decoration: none;
      color: #000;
      background: #fff;
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
  .mega-menu h4 {
    transition: all 1s;
    width: 320px;
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 700px;
    &:hover {
      color: #c35794;
    }
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
  .mega-menu-1 {
    width: 100%;
    left: 0;
    padding: 5em;
  }
  .mega-menu-2 {
    justify-content: left;
    padding: 1em 2em 1em 0em;
    li {
      cursor: pointer;
      margin: 1em 0em;
      width: 100%;
      transition: all 0.6s;
      padding: 10px 15px;
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
    color: #fff;
  }
  img {
    width: 320px;
    height: 240px;
    transition: all 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .img-li {
    width: 320px;
    height: 240px;
    overflow: hidden;
  }
  @media only screen and (max-width: 768px) {
    .nav-li {
      display: none;
    }
  }
`;
function Navbar() {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const openSideBar = () => {
    toggleSideBar(true);
    console.log(SideBarIsActive);
  };
  return (
    <div>
      <Container>
        <ul className="container">
          <li className="nav-li">
            <p>
              <Link className="link" to="/">
                Home
              </Link>
            </p>
          </li>
          <li className="droppable nav-li">
            <p>
              <Link className="link" to="/">
                Blogs
              </Link>
            </p>
            <div className="mega-menu mega-menu-1">
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img1} alt="image1" />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img2} alt="image2" />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img3} alt="image3" />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img4} alt="image4" />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
            </div>
          </li>
          <li className="nav-li">
            <p>
              <Link to="./About" className="link">
                ABOUT
              </Link>
            </p>
          </li>
          <li className="nav-li">
            <p>
              <Link to="./Contact" className="link">
                Contact
              </Link>
            </p>
          </li>
          <li className="droppable nav-li">
            <p>
              <Link className="link" to="/">
                Follow
              </Link>
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
          <li onClick={() => openSideBar()}>
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

export default Navbar;
