import React from "react";

import Styles from "../loader/Loader.module.css";

const Loader = () => {
  // return <div className={Styles.loader}></div>;
  return (
    <div className={Styles.wrapper}>
    <div className={Styles.circle}></div>
    <div className={Styles.circle}></div>
    <div className={Styles.circle}></div>
    <div className={Styles.shadow}></div>
    <div className={Styles.shadow}></div>
    <div className={Styles.shadow}></div>
</div>
  );
};

export default Loader;
