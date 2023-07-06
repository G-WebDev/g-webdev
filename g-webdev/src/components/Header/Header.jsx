import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Header.module.css";

// IMPORT IMAGES
import images from "../../Assets/Images";

// IMPORT INTERN COMPONENTS
import NavBar from "../navbar/Navbar";
import SideBar from "../sidebar/SideBar";

// IMPORT EXTERN COMPONENTS
import { Spin as Hamburger } from "hamburger-react";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className={Style.header}>
      <div className={Style.header__container}>

        <div className={Style.header__box__left}>
          <div className={Style.header__logo__box}>
            <Link to="/" target="blank">
              <img src={images.Logo} alt="logo" className={Style.header__logo} />
            </Link>
          </div>
        </div>

        <div className={Style.header__box__right}>
          <div className={Style.header__navbar}>
            <NavBar />
          </div>

          <div className={Style.hamburger}>
            <div className={Style.hamburger__box}>
              <Hamburger duration={1} toggled={openSideBar} toggle={setOpenSideBar} />
            </div>
          </div>
        </div>

      </div>

      <div className={Style.header__sidebar}>
        {openSideBar && (
          <div className={Style.sidebar} isOpen={openSideBar}>
            <SideBar />
          </div>
        )}
      </div>

    </div>
  );
};

export default Header;
