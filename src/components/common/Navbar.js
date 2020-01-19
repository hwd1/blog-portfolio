import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Hamburger from "./Hamburger";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import SideBar from "./SideBar";

const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  height: 60px;
  background: #2d0a2e;
  position: relative;
  li {
    list-style: none;
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
    z-index: -1;
    opacity: 0;
    transform: translateY(-10%);
    position: absolute;
    justify-content: space-evenly;
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
    z-index: 5;
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
    padding: 1em 2em 1em 1em;
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
                    <img src={img1} />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img2} />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img3} />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
              <ul>
                <Link to="/">
                  <li className="img-li">
                    <img src={img4} />
                  </li>
                  <h4>Lorem Ipsum is simply dummy text of the printing</h4>
                </Link>
              </ul>
            </div>
          </li>
          <li className="nav-li">
            <p>
              <Link to="/" className="link">
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
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Github</Link>
                </li>
                <li>
                  <Link to="/">Linkden</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-li" onClick={() => openSideBar()}>
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
