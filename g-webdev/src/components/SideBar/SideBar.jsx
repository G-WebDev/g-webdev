import React from 'react';
import { Link } from 'react-router-dom';


// IMPORT INTERN STYLE
import Style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={Style.sidebar}>

      <ul className={Style.sidebar__menu__list}>

        <li className={Style.sidebar__list__item}>
          <Link to="/">Home</Link>
          <div className={Style.item_line}></div>
        </li>

        <li className={Style.sidebar__list__item}>
          <Link to="/about">About Me</Link>
          <div className={Style.item_line}></div>
        </li>

        <li className={Style.sidebar__list__item}>
          <Link to="/diensten">Diensten</Link>
          <div className={Style.item_line}></div>
        </li>

        <li className={Style.sidebar__list__item}>
          <Link to="/projecten">Projecten</Link>
          <div className={Style.item_line}></div>
        </li>

        <li className={Style.sidebar__list__item}>
          <Link to="/contact">Contact</Link>
          <div className={Style.item_line}></div>
        </li>
      </ul>

    </div>
  )
}

export default SideBar