import React, { useState, useEffect } from "react";
import Style from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ onToggle, isOpen }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onToggle) {
      onToggle(!isActive);
    }
  };

  return (
    <div
      className={`${Style.hamburger_menu} ${isActive ? Style.active : ""}`}
      onClick={handleClick}
    >
      <div className={Style.bar}></div>
      <div className={Style.bar}></div>
      <div className={Style.bar}></div>
    </div>
  );
};

export default HamburgerMenu;
