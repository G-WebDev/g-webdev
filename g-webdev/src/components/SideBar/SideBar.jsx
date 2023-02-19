import React from 'react';
import { Link } from 'react-router-dom';


// IMPORT INTERN STYLE
import Style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={Style.sidebar}>
      <div className={Style.sidebar__container}>

        <ul className={Style.sidebar__menu__list}>

          <li className={Style.sidebar__list__item}>
            <Link to="/" target="blank">Home</Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/about" target="blank">About Me</Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/diensten" target="blank">Diensten</Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/projecten" target="blank">Projecten</Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/contact" target="blank">Contact</Link>
            <div className={Style.item_line}></div>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default SideBar