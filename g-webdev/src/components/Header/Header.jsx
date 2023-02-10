import React, { useState } from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Header.module.css";

// IMPORT IMAGES
import images from "../../Assets/Images";

// IMPORT INTERN COMPONENTS
import NavBar from "../Navbar/NavBar";
import SideBar from "../SideBar/SideBar";

// IMPORT EXTERN COMPONENTS
import { Spin as Hamburger } from "hamburger-react";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className={Style.header}>
      <div className={Style.header_wrapper}>
        <div className={Style.header_box_left}>
          <div className={Style.logo_box}>
            <Link to="/">
              <img src={images.Logo} alt="logo" className={Style.logo} />
            </Link>
          </div>
        </div>

        <div className={Style.header_box_right}>
          <div className={Style.header_navbar}>
            <NavBar />
          </div>
        </div>
      </div>

      <div className={Style.hamburger}>
        <Hamburger duration={1} toggled={openSideBar} toggle={setOpenSideBar} />
      </div>
      {openSideBar && (
        <div className={Style.sidebar} isOpen={openSideBar}>
          <SideBar />
        </div>
      )}
    </div>
  );
};

export default Header;
