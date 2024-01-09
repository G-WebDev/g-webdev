import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Style.navbar__menu}>
      <ul className={Style.navbar__menu__list}>
        <li className={Style.navbar__menu__list__item}>
          <Link to="/" >
            Home
          </Link>
          <div className={Style.item__line}></div>
        </li>

        <li className={Style.navbar__menu__list__item}>
          <Link to="/about" >
            About Me
          </Link>
          <div className={Style.item__line}></div>
        </li>

        <li className={Style.navbar__menu__list__item}>
          <Link to="/services" >
            Services
          </Link>
          <div className={Style.item__line}></div>
        </li>

        <li className={Style.navbar__menu__list__item}>
          <Link to="/projects" >
            Projects
          </Link>
          <div className={Style.item__line}></div>
        </li>

        <li className={Style.navbar__menu__list__item}>
          <Link to="/contact" >
            Contact
          </Link>
          <div className={Style.item__line}></div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
