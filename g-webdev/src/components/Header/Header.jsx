import React from "react";

import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Header.module.css";

// IMPORT IMAGES
import images from "../../Assets/Images";

// IMPORT INTERN COMPONENTS
import NavBar from "./navbar/Navbar";

import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";

// IMPORT EXTERN COMPONENTS
// import { Spin as Hamburger } from "hamburger-react";

const Header = ({ onToggleSidebar }) => {
  return (
    <div className={Style.header}>
      <div className={Style.header__logo__box}>
        <Link to="/">
          <img src={images.Logo} alt="logo" className={Style.header__logo} />
        </Link>
      </div>

      <div className={Style.hamburger__box}>
        <HamburgerMenu onToggle={(state) => onToggleSidebar(state)} />
      </div>

      <div className={Style.header__navigation__box}>
        <div className={Style.header__navbar}>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
