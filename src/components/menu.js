import * as React from "react";
import { Link } from "gatsby";

import Home from "../assets/home.svg";
import Phone from "../assets/phone.svg";
import Showreel from "../assets/showreel.svg";

import "./global-style.css";

const Menu = () => {
  return (
    <div className="menu">
      <div>
        <Link to="/" activeStyle={{ opacity: "1" }}>
          <Home className="menu-icon" />{" "}
        </Link>
        <Link
          to="/showreel"
          activeStyle={{ opacity: "1" }}
          partiallyActive={true}
        >
          <Showreel className="menu-icon" />{" "}
        </Link>
        <Link to="/contact" activeStyle={{ opacity: "1" }}>
          <Phone className="menu-icon" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
