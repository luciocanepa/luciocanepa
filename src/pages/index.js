import * as React from "react"
import {Helmet} from 'react-helmet'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Pc from "../assets/pc.svg"
import Uni from "../assets/uni.svg"
import Sport from "../assets/sport.svg"

import favicon from "../images/favicon.png"

import "../components/style.css"

const indexPage = ({data}) => {
  const image = getImage(data.avatar)
  return(
      <div className="welcome">
      <Helmet>
        <title>luciocanepa</title>
        <link rel="icon" href={favicon}/>
      </Helmet>
        <div className="welcome-photo">
          <GatsbyImage image={image} alt="avatar image - Lucio Canepa" />
        </div>
        <div className="welcome-text">
          <h1>Lucio Canepa</h1>
          <ul>
            <li><Uni className="welcome-icon" /> Matematica presso ETH Zürich </li>
            <li><Pc className="welcome-icon"/> Appassionato di design e informatica </li>
            <li><Sport className="welcome-icon"/> Sport: corsa e arbitro di calcio </li>
          </ul>
        </div>
      </div>
  )
}

export default indexPage

// {
//   resolve: `gatsby-source-strapi`,
//   options: {
//     apiURL: `http://localhost:1337`,
//     queryLimit: 1000,
//     collectionTypes: [
//       "restaurant",
//       "category",
//     ],
//   },
// },


export const query = graphql `
{
  avatar: file(relativePath: {eq: "avatar.png"}) {
    childImageSharp {
      gatsbyImageData(
        placeholder: TRACED_SVG
        layout: CONSTRAINED
        transformOptions: {fit: CONTAIN}
      )
    }
  }
}
`