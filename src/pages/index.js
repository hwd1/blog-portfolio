import React, { useState } from "react";
import Carousel from "../components/MyCarousel";
import Layout from "../templates/DefaultLayout";
import BlogCard from "../components/BlogCard";
import styled from "styled-components";
import { Link } from "gatsby";
const Container = styled.div`
  .blogs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1020px;
    margin: auto;
    margin-top: 10em;
    margin-bottom: 10em;
  }
  a {
    color: inherit;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;
const Index = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Welcome to Gatsby",
      img: "img1.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 2,
      title: "Welcome to Gatsby",
      img: "img2.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 3,
      title: "Welcome to Gatsby",
      img: "img3.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 4,
      title: "Welcome to Gatsby",
      img: "img4.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 5,
      title: "Welcome to Gatsby",
      img: "img1.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 6,
      title: "Welcome to Gatsby",
      img: "img2.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 7,
      title: "Welcome to Gatsby",
      img: "img3.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 8,
      title: "Welcome to Gatsby",
      img: "img4.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    },
    {
      id: 9,
      title: "Welcome to Gatsby",
      img: "img1.jpg",
      desc:
        "Build an API driven static-site with Gatsby.js and use Ghost  headless CMS. Read more about how it works and how to use this starter theme here!",
      date: "10/10/2019"
    }
  ]);
  return (
    <Container>
      <Layout>
        <Carousel />
        <div className="blogs">
          {blogs.map(blog => (
            <div key={blog.id}>
              <Link to="./">
                <BlogCard
                  title={blog.title}
                  img={blog.img}
                  desc={blog.desc}
                  date={blog.date}
                />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </Container>
  );
};

export default Index;
