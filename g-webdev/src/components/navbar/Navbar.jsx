import React from "react";
import {Link} from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_menu}>
        <ul className={Style.navbar_menu_list}>
          <li className={Style.navbar_menu_list_item}>
            <Link to="/web3">Web3</Link>
            <div className={Style.item_line}></div>
          </li>
          <li className={Style.navbar_menu_list_item}>
            <Link to="/skills">Skills</Link>
            <div className={Style.item_line}></div>
          </li>
          <li className={Style.navbar_menu_list_item}>
            <Link to="/projects">Projects</Link>
            <div className={Style.item_line}></div>
          </li>
          <li className={Style.navbar_menu_list_item}>
            <Link to="/contact">Contact</Link>
            <div className={Style.item_line}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
