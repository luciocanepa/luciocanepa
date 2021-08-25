import * as React from "react"
import avatar from "../images/avatar.png"
import pc from "../images/pc.svg"
import uni from "../images/uni.svg"
import sport from "../images/sport.svg"

import "../components/style.css"

const indexPage = () => {
  return(
    <div className="welcome">
      <div className="welcome-photo">
        <img src={avatar}></img>
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