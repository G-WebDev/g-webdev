import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

// IMPORT INTERN STYLE
import Style from "./HomeIntro.module.css";

import images from "../../../Assets/Images";

const HomeIntro = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Next level Web Development..."],
      typeSpeed: 40,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={Style.home__intro__container}>
      <div className={Style.home__intro__title__box}>
        <h1 className={Style.home__intro__title}>
          <span style={{ whiteSpace: "pre" }} ref={el} />
        </h1>
      </div>

      <div className={Style.home__intro__text__box}>
        <h3 className={Style.home__intro__text}>
          Elevate your online presence with G.WebDev!
          <br />
          Are you in need of a captivating website or searching for a skilled
          web developer in Gent?
          <br />
          Look no further! I'm Gwen, the creative force behind{" "}
          <strong>G.WebDev</strong>.
          <br />
          We specialize in crafting visually stunning and highly functional
          websites, webshops, and web applications.
          <br />
          Let's transform your online vision into a compelling digital reality.
          <br />
          Discover the power of innovative web solutions with G.WebDev!
        </h3>
      </div>

      <div className={Style.home__intro__box__image}>
        <img src={images.HomeBg} alt="laptop" className={Style.home__laptop} />
      </div>
    </div>
  );
};

export default HomeIntro;
