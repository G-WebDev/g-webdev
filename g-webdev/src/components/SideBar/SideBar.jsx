import React from 'react';
import { Link } from 'react-router-dom';


// IMPORT INTERN STYLE
import Style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={Style.sidebar}>
      <ul className={Style.sidebar_menu_list}>
        <li className={Style.list_item}> <Link to="/web3">Web3</Link> </li>
        <li className={Style.list_item}> <Link to="/skills">Skills</Link> </li>
        <li className={Style.list_item}> <Link to="/projects">Projects</Link> </li>
        <li className={Style.list_item}> <Link to="/contact">Contact</Link> </li>
      </ul>
    </div>
  )
}

export default SideBar