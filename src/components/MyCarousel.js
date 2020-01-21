import React from "react";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import ItemsCarousel from "react-items-carousel";
const Container = styled.div`
  z-index: -1;
  height: 100%;
  margin-top: 60px;
  .arrows {
    outline: none;
    border: none;
    background: #fff;
    color: #333;
    font-size: 20px;
    padding: 4px 15px;
    transition: all 0.3s;
    border-radius: 2px;
    &:hover {
      color: #f42548;
    }
  }
  .carousel-card {
    height: 340px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }
  h4 {
    visibility: visible;
    -webkit-tap-highlight-color: transparent;
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
    transition: all 0.6s;
    &:hover {
      color: #c35794;
    }
  }
  a {
    color: #000;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`;

let noOfItems = 12;
const autoPlayDelay = 6000;
const chevronWidth = 80;

class MyCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
    noOfCards: 4
  };
  updateDimensions() {
    let value = Math.floor(window.innerWidth / 330);
    if (value > 4) {
      value = 4;
    }
    this.setState({ noOfCards: value });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    this.updateDimensions();
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    clearInterval(this.interval);
  }
  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - this.state.noOfCards + 1)
    }));
  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Container>
        <ItemsCarousel
          infiniteLoop={true}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          numberOfCards={this.state.noOfCards}
          noOfItems={noOfItems}
          leftChevron={<button className="arrows">&#10094;</button>}
          rightChevron={<button className="arrows">&#10095;</button>}
          chevronWidth={chevronWidth}
          className="carousel"
        >
          {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              to={`/blogs/${node.frontmatter.title.split(" ").join("-")}`}
              key={node.id}
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
        </ItemsCarousel>
      </Container>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 8
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
    render={data => <MyCarousel data={data} />}
  />
);
