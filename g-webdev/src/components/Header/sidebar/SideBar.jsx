import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./SideBar.module.css";

const SideBar = ({ onClose, setIsActive }) => {
  const handleLinkClick = () => {
    onClose();

    setIsActive(false);
  };


  return (
    <div className={Style.sidebar__slider}>
      <div className={Style.sidebar}>
        <ul className={Style.sidebar__menu__list}>
          <li className={Style.sidebar__list__item}>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/about" onClick={handleLinkClick}>
              About Me
            </Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/services" onClick={handleLinkClick}>
              Diensten
            </Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/projects" onClick={handleLinkClick}>
              Projecten
            </Link>
            <div className={Style.item_line}></div>
          </li>

          <li className={Style.sidebar__list__item}>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
            <div className={Style.item_line}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
