import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Navbar.module.css";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__container}>
      <div className={Style.navbar__menu}>
        <ul className={Style.navbar__menu__list}>
          <li className={Style.navbar__menu__list__item}>
            <Link to="/" target="blank">
              Home
            </Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/about" target="blank">
              About Me
            </Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/diensten" target="blank">
              Diensten
            </Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/projecten" target="blank">
              Projecten
            </Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/contact" target="blank">
              Contact
            </Link>
            <div className={Style.item__line}></div>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
