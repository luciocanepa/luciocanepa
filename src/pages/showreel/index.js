import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import "../../components/showreel.css";
import PortfolioCardIcon from "../../components/portfolio-card-icon.js";

import Menu from "../../components/menu";

const Shworeel = ({ location, data }) => {
  console.log(location);
  const works = data.works.nodes;
  const partners = data.partners.nodes;
  const [expand, setExpand] = useState(true);
  return (
    <div className="showreel">
      <Menu />
      <div className="showreel-title">
        <h1>Showreel</h1>
      </div>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-cards">
          {works.map((w) => {
            if ((!expand && w.metadata.points > 3) || expand) {
              return (
                <Link to={`/showreel/${w.slug}`} className="portfolio-card">
                  <h3>{w.metadata.name}</h3>
                  <p id="tag">
                    <PortfolioCardIcon tag={w.metadata.tag} /> {w.metadata.tag}
                  </p>
                  <p>{w.metadata.description}</p>
                </Link>
              );
            }
          })}
        </div>
        <button
          onClick={() => setExpand(true)}
          className="portfolio-button"
          id={expand ? "hide" : ""}
        >
          {" "}
          Mostra di più{" "}
        </button>
      </div>
      <div className="collaborations">
        <h1> Le mie collaborazioni </h1>
        <div className="portfolio-cards">
          {partners.map((p) => {
            return (
              <Link to={`/showreel/${p.slug}`} className="portfolio-card">
                <h3>{p.metadata.name}</h3>
                <p id="tag">
                  {" "}
                  <PortfolioCardIcon tag={p.metadata.tag} /> {p.metadata.tag}
                </p>
                <p>{p.metadata.description}</p>
              </Link>
            );
          })}
        </div>
        <footer>
          <p style={{ color: "#ffffff" }}>&copy; luciocanepa 2021</p>
        </footer>
      </div>
    </div>
  );
};

export default Shworeel;

export const query = graphql`
  {
    works: allCosmicjsWorks(sort: { fields: metadata___points, order: DESC }) {
      nodes {
        slug
        metadata {
          name
          description
          year
          tag
          body
          links
          points
        }
      }
    }
    partners: allCosmicjsPartners(
      sort: { order: DESC, fields: metadata___points }
    ) {
      nodes {
        slug
        metadata {
          name
          description
          year
          tag
          body
          links
        }
      }
    }
  }
`;
