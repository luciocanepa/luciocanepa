import * as React from "react"

import Pen from "../assets/pen.svg"
import Designer from "../assets/affinity-designer.svg"
import Publisher from "../assets/affinity-publisher.svg"
import Photo from "../assets/affinity-photo.svg"
import Illustrator from "../assets/adobe-illustrator.svg"
import InDesign from "../assets/adobe-indesign.svg"
import Photoshop from "../assets/adobe-photoshop.svg"

import Code from "../assets/programming.svg"
import GatsbySvg from "../assets/gatsby.svg"
import GatsbyCloud from "../assets/gatsby-cloud.svg"
import ReactLogo from "../assets/react-logo.svg"
import Cosmic from "../assets/cosmic.svg"
import Firebase from "../assets/firebase.svg"
import More from "../assets/more.svg"

import Video from "../assets/video.svg"
import FinalCut from "../assets/final-cut.svg"
import PremierePro from "../assets/premiere-pro.svg"

import Document from "../assets/document.svg"

const Skills = () => {
    return(
        <div className="skills">
        <h1 style={{gridArea: "skills"}}>Le mie competenze</h1>
        <div className="skill" style={{gridArea: "graphics"}}>
          <div className="skill-card" id="graphics">
            <Pen />
            <h3>Grafica e design</h3>
          </div>
          <div className="skill-left">
            <ul>
              <li id="skill-title">Cosa realizzo</li>
              <li>Design di loghi e simboli grafici</li>
              <li>Realizzazione di opuscoli, volantini e manifesti</li>
              <li>Impaginazione di giornalini e riviste</li>
            </ul>
          </div>
          <div className="skill-right">
            <ul>
              <li id="skill-title">I programmi che uso</li>
              <li className="text-icon">
                <div>
                  <Designer className="software-icon" />
                  <Publisher className="software-icon" />
                  <Photo className="software-icon" />
                </div>
                <p> Suite Affinity </p>
              </li>
              <li className="text-icon">
                <div>
                  <Illustrator className="software-icon" />
                  <InDesign className="software-icon" />
                  <Photoshop className="software-icon" />
                </div>
                <p> Suite Adobe </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="skill" style={{gridArea: "web"}}>
          <div className="skill-card" id="web">
            <Code />
            <h3>Sviluppo Web - Full stack development</h3>
          </div>
          <div className="skill-left">
            <ul>
              <li id="skill-title">Cosa realizzo</li>
              <li>Siti web, curando sia il front- che il backend</li>
              <li>Banche dati e APIs</li>
              <li>Sviluppo di Web App e consulenza UX</li>
            </ul>
          </div>
          <div className="skill-right">
            <ul>
              <li id="skill-title">I miei strumenti preferiti</li>
              <li className="text-icon">
                <div>
                  <GatsbySvg className="software-icon" />
                  <GatsbyCloud className="software-icon" />
                  <ReactLogo className="software-icon" />
                </div>
                <p> Gatsby JS + React </p>
              </li>
              <li className="text-icon">
                <div>
                  <Cosmic className="software-icon" />
                  <Firebase className="software-icon" />
                  <More className="software-icon" />
                </div>
                <p> Cosmic JS, Firebase </p>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="skill" id="video-container" style={{gridArea: "video"}}>
          <div className="skill-card" id="video">
            <Video />
            <h3>Video editing</h3>
          </div>
          <div className="skill-left">
            <ul>
              <li>Realizzazione di brevi filmati</li>
              <li>Animazione di grafiche e titoli</li>
            </ul>
          </div>
          <div className="skill-right">
            <ul>
              <li className="text-icon">
                <div>
                  <FinalCut className="software-icon" />
                  <PremierePro className="software-icon" />
                  <More className="software-icon" />
                </div>
                <p> Final Cut, Premiere Pro </p>
              </li>
            </ul>
          </div>
      </div>
        <div className="skill" id="school-container" style={{gridArea: "school"}}>
            <div className="skill-card" id="school">
              <Document />
              <h3>Lezioni private</h3>
            </div>
            <div className="skill-left">
              <ul style={{marginBottom: "3vh"}}>
                <li>Lezioni settimanali di matematica</li>
                <li>Preparazione mirata a un test</li>
              </ul>
            </div>
        </div>
        </div>
    )
}

export default Skills