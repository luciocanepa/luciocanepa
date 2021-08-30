import * as React from "react"
import {Helmet} from 'react-helmet'
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import avatar from "../images/avatar.png"
import pc from "../images/pc.svg"
import uni from "../images/uni.svg"
import sport from "../images/sport.svg"
import favicon from "../images/favicon.png"

import "../components/style.css"

const indexPage = ({ data }) => {
  // console.log(data.allStrapiRestaurant.edges[0].node)
  return(
      <div className="welcome">
      <Helmet>
        <title>luciocanepa</title>
        <link rel="icon" href={favicon}/>
      </Helmet>
        <div className="welcome-photo">
          <StaticImage src="../images/avatar.png" alt="avatar image" placeholder="blurred" layout="constrained" />
        </div>
        <div className="welcome-text">
          <h1>Lucio Canepa</h1>
          <ul>
            <li><img src={uni}/> Matematica presso ETH Zürich </li>
            <li><img src={pc}/> Appassionato di design e informatica </li>
            <li><img src={sport}/> Sport: corsa e arbitro di calcio </li>
          </ul>
        </div>
      </div>
  )
}

export default indexPage

export const query = graphql`
  query data {
    allStrapiRestaurant {
      edges {
        node {
          strapiId
          name
          description
        }
      }
    }
  }
`;