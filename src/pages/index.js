import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Menu from "../components/menu.js";
import Skills from "../components/skills.js";

import Pc from "../assets/pc.svg";
import Uni from "../assets/uni.svg";
import Sport from "../assets/sport.svg";

import Continue from "../assets/down-arrow.svg";

import favicon from "../images/favicon.png";

import "../components/style.css";

const indexPage = ({ data }) => {
  const image = getImage(data.avatar);
  return (
    <div className="home">
      <Menu />
      <div className="welcome">
        <Helmet>
          <title>luciocanepa</title>
          <link rel="icon" href={favicon} />
        </Helmet>
        <div className="welcome-photo">
          <GatsbyImage image={image} alt="avatar image - Lucio Canepa" />
        </div>
        <div className="welcome-text">
          <h1>Lucio Canepa</h1>
          <ul>
            <li>
              <Uni className="welcome-icon" /> Matematica presso ETH Zürich{" "}
            </li>
            <li>
              <Pc className="welcome-icon" /> Appassionato di design e
              informatica{" "}
            </li>
            <li>
              <Sport className="welcome-icon" /> Sport: corsa e arbitro di
              calcio{" "}
            </li>
          </ul>
        </div>
        <div className="down-arrow">
          <Continue />
        </div>
      </div>
      <Skills />
      <footer>
        <p>&copy; luciocanepa 2021</p>
      </footer>
    </div>
  );
};

export default indexPage;

export const query = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          transformOptions: { fit: CONTAIN }
        )
      }
    }
  }
`;
