import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar__menu}>

        <ul className={Style.navbar__menu__list}>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/diensten">Diensten</Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/projecten">Projecten</Link>
            <div className={Style.item__line}></div>
          </li>

          <li className={Style.navbar__menu__list__item}>
            <Link to="/contact">Contact</Link>
            <div className={Style.item__line}></div>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default NavBar;
