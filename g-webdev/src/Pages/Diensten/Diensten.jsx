import React from "react";

import Style from "./Diensten.module.css";

import ServiceTop from "../../components/servises/ServiceTop";

const Diensten = () => {
  return (
    <div className={Style.diensten__container}>
      <ServiceTop />
    </div>
  );
};

export default Diensten;
