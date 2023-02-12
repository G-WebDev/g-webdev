import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

// IMPORT INTERN STYLE
import Style from "./Home.module.css";

import images from "../../Assets/Images";

const Home = () => {

  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Web development...'
      ],
      typeSpeed: 70,
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
            <div className={Style.home__intro__text}>Een website nodig? Of zoek je naar een web developer in Gent? <br />
              <strong>G.WebDev</strong> ontwerpt, bouwt, onderhoud en optimaliseerd uw dé website, webshop of webapplicatie die jouw online activiteit naar een hoger niveau brengt.<br />

            </div>
          </div>

          <div className={Style.home__intro__box__image}>
            <img src={images.HomeBg} className={Style.home__laptop} />
          </div>

        </div>
      </div>
      <div className={Style.home__content__box}>

        <div className={Style.home__content__block1}>
          <div className={Style.home__content__block__title}>
            WEBSITE LATEN MAKEN?
          </div>
          <div className={Style.home__content__block__text}>
            Een website laten maken is de eerste stap naar succes voor uw bedrijf.
            De taak lijkt misschien een beetje ontmoedigend, maar G.WebDev helpt en begeleidt je tijdens het hele proces.
          </div>
        </div>

        <div className={Style.home__content__block2}>
          <div className={Style.home__content__block__title}>
            OVER G.WebDev.
          </div>
          <div className={Style.home__content__block__text}>
            Zoek je een webdesign bureau in Gent? G.WebDev is een web developer met passie voor het web.
            Met jaren ervaring en de goede service bouwen we voor jou als ambitieus bedrijf een krachtige website!
          </div>
        </div>

        <div className={Style.home__content__block3}>
          <div className={Style.home__content__block__title}>
            WEBDDEVELOPER IN GENT.
          </div>
          <div className={Style.home__content__block__text}>
            Begin vandaag nog met het digitaliseren van je onderneming. Je online aanwezigheid is onmisbaar.
            Neem daarom plaats op het internet en bereik meer klanten, want zij zoeken online.
          </div>
        </div>
      </div>


    </div >
  );
};



export default Home;
