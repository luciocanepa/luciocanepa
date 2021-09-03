import * as React from "react"
import Menu from "../components/menu.js"
import Footer from "../components/footer.js"

import "../components/contact.css"

import Profile from "../assets/profile.svg"
import Phone from "../assets/phone.svg"
import Mail from "../assets/mail.svg"
import Whatsapp from "../assets/whatsapp.svg"
import Telegram from "../assets/telegram.svg"
import Instagram from "../assets/instagram.svg"

const Contact = () => {
    return(
        <div className="contact">
            <Menu />
            <div className="contact-card">
                <Profile id="profile-picture"/>
                <div className="contact-box">
                    <ul className="contacts">
                        <li id="contact-name"> <h3>Lucio Canepa</h3> </li>
                        <li> <Phone /> <a href="tel:+41793440928">+41 79 344 09 28</a> </li>
                        <li> <Mail /> <a href="mailto:lucio.canepa@bluewin.ch">lucio.canepa@bluewin.ch</a></li>
                    </ul>
                    <p>----------------------</p>
                    <ul className="socials">
                        <li> <Whatsapp /> <a href="https://wa.me/+41793440928" target="_blank"> Scrivimi su Whatsapp </a></li>
                        <li> <Telegram /> <a href="https://t.me/LucioCanepa" target="_blank"> Scrivimi su Telegram </a></li>
                        <li> <Instagram /> <a href="https://www.instagram.com/lucio_canepa/?r=nametag" target="_blank">lucio_canepa</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact


export const query = graphql `
query {
  profile: file(relativePath: {eq: "profile.svg"}) {
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