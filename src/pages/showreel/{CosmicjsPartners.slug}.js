import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

import PortfolioCardIcon from "../../components/portfolio-card-icon.js";
import Menu from "../../components/menu";

import "../../components/works.css";

const Work = ({ data }) => {
  const work = data.partner.nodes[0];
  // console.log(work);
  console.log(parse);
  return (
    <div className="work">
      <Menu />
      <div className="work-title">
        <h1>{work.metadata.name}</h1>
      </div>
      <p className="work-info">
        <PortfolioCardIcon tag={work.metadata.tag} />
        {work.metadata.tag}
        {" - "}
        {work.metadata.year}
      </p>
      <div className="work-main">
        <span className="work-description"> {work.metadata.description} </span>
        <div className="work-content">
          <div className="work-body"> {parse(work.metadata.body)} </div>
          <div className="work-links"> {parse(work.metadata.links)} </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

export const query = graphql`
  query ($slug: String) {
    partner: allCosmicjsPartners(filter: { slug: { eq: $slug } }) {
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
