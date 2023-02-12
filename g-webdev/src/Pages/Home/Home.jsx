import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

// IMPORT INTERN STYLE
import Style from "./Home.module.css";

// import images from "../../Assets/Images";

const Home = () => {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'webdesign...'
      ],
      typeSpeed: 150
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className={Style.home}>
      <div className={Style.home__container}>
        <div className={Style.home__intro__box}>

          <div className={Style.home__intro__title__box}>
            <div className={Style.home__intro__title}>
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
          </div>

          <div className={Style.home__intro__text__box}>
            <div className={Style.home__intro__text}>Een website nodig? Of zoek je naar een webdesigner in Gent?
              Bij G.WebDev ontwerpen, bouwen, onderhouden en optimaliseren we websites voor alle branches.
              G.WebDev maakt dé website, webshop of webapplicatie die jouw online activiteit naar een hoger niveau brengt.</div>
          </div>

        </div>
      </div>

    </div>
  );
};



export default Home;
