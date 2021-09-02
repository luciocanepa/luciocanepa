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
                        <li> <h3>Lucio Canepa</h3> </li>
                        <li> <Phone /> +41 79 344 09 28 </li>
                        <li> <Mail /> lucio.canepa@bluewin.ch</li>
                    </ul>
                    <p>----------------------</p>
                    <ul className="socials">
                        <li> <Whatsapp /> <a href="https://wa.me/+41793440928" > Scrivimi su Whatsapp </a></li>
                        <li> <Telegram /> <a href="https://t.me/LucioCanepa" > Scrivimi su Telegram </a></li>
                        <li> <Instagram /> <a href="https://www.instagram.com/lucio_canepa/?r=nametag">lucio_canepa</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact