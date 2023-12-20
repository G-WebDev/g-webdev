import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

// IMPORT INTERN STYLE
import Style from "./HomeIntro.module.css";

import images from "../../../Assets/Images";

const HomeIntro = () => {
  const intro = useRef(null);

  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      // strings: ["Next level Web Development..."],
      // strings: ["Elevate your online presence with G.WebDev!"],
      strings: ["Elevate your online presence with G.WebDev!"],
      typeSpeed: 30,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(intro.current, options);

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
          <span style={{ whiteSpace: "pre" }} ref={intro} />
        </h1>
      </div>

      <div className={Style.home__intro__text__box}>
        <p className={Style.home__intro__text}>
          Hello, i'm Gwen, the creative force behind <strong>G.WebDev</strong>.
          <br />
          Specialized in crafting visually stunning and highly functional
          websites, webshops, and web applications.
        </p>

        <p className={Style.home__intro__text}>
          Are you in need of a captivating website or searching for a skilled
          web developer in Gent?
        </p>

        <p className={Style.home__intro__text}>Look no further!</p>

        <p className={Style.home__intro__text}>
          Let's transform your online vision into a compelling digital reality.
          <br />
          Discover the power of innovative web solutions with <br />
          <strong>G.WebDev</strong>
        </p>
      </div>

      <div className={Style.home__intro__image__box}>
        <img src={images.HomeBg} alt="laptop" className={Style.home__laptop} />
      </div>
    </div>
  );
};

export default HomeIntro;
