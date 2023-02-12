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
        'Next level Web Development...'
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
              <strong>G.WebDev</strong> ontwerpt, bouwt, onderhoud en optimaliseerd dé website, webshop of webapplicatie die jouw<br />
              online activiteit naar een hoger niveau brengt.<br />

            </div>
          </div>

          <div className={Style.home__intro__box__image}>
            <img src={images.HomeBg} alt="laptop" className={Style.home__laptop} />
          </div>

        </div>
      </div>
      <div className={Style.home__content__box}>

        <div className={Style.home__content__blocks}>
          <div className={Style.home__content__block1}>
            <div className={Style.home__content__block__title}>
              WEBSITE NODIG?
            </div>
            <div className={Style.home__content__block__text}>
              Een website is niet meer weg te denken als het gaat over het succes voor uw bedrijf.
              De taak lijkt misschien een beetje ontmoedigend, maar <strong>G.WebDev</strong> helpt en begeleidt je tijdens het hele proces.
            </div>
          </div>

          <div className={Style.home__content__block2}>
            <div className={Style.home__content__block__title}>
              OVER G.WebDev.
            </div>
            <div className={Style.home__content__block__text}>
              Zoek je een web developer in Gent? <strong>G.WebDev</strong> is een web developer met passie voor het web.
              Met jaren ervaring en de goede service bouwen we voor jou als ambitieus bedrijf een krachtige website!
            </div>
          </div>

          <div className={Style.home__content__block3}>
            <div className={Style.home__content__block__title}>
              WEB DEVELOPER IN GENT.
            </div>
            <div className={Style.home__content__block__text}>
              Begin vandaag nog met het digitaliseren van je onderneming. Je online aanwezigheid is onmisbaar.
              Neem daarom plaats op het internet en bereik meer klanten, want zij zoeken online.
            </div>
          </div>

        </div>

        <div className={Style.home__content__main__container}>
          <div className={Style.home__content__main__box}>
            <div className={Style.home__content__main__img__box}>
              {/* <img src={images.ContentImage} alt="contentImg" className={Style.contentImage} /> */}
            </div>

            <div className={Style.home__content__main__box__col1}>
              <div className={Style.home__content__main__box1}>

                <div className={Style.home__content__main__box__title}>
                  WEBDESIGN
                  <div className={Style.content__line}></div>
                </div>

                <div className={Style.home__content__main__box__text}>
                  <div className={Style.content__text__line}></div>
                  <br />
                  Een aantrekkelijke website die zowel informatief als interactief is?
                  Met ervaren en passioneel webdesign leveren wij bij G.WebDev voor elk bedrijf het beste en meest bevredigende eindresultaat.
                  Straal expertise en persoonlijkheid uit met een krachtig webdesign: zo win je gegarandeerd klanten.
                  <div className={Style.content__text__line}></div>
                </div>
              </div>

              <div className={Style.home__content__main__box2}>

                <div className={Style.home__content__main__box__title}>
                  BEHEERSYSTEEM
                  <div className={Style.content__line}></div>
                </div>

                <div className={Style.home__content__main__box__text}>
                  <div className={Style.content__text__line}></div>
                  <br />
                  Beheer je klanten en producten met een eenvoudig en doelgericht systeem.
                  Zo bespaar je tijd én geld: een snelle manier om je leven een pak aangenamer en overzichtelijker te maken.
                  Daar zet G.WebDev zich maar al te graag voor in!
                  <div className={Style.content__text__line}></div>
                </div>
              </div>
            </div>

            <div className={Style.home__content__main__box__col2}>
              <div className={Style.home__content__main__box3}>
                <div className={Style.home__content__main__box__title}>
                  WEBSHOP
                  <div className={Style.content__line}></div>
                </div>

                <div className={Style.home__content__main__box__text}>
                  <div className={Style.content__text__line}></div>
                  <br />
                  Online verkopen is nu eenmaal de 'hipe'. Bedrijven kiezen hiervoor om meer klanten aan te spreken.
                  Start vandaag met uw online shop en groei tot een succesvolle en globale winkel.
                  Expand your limits before it's late! Samen bouwen we uw online winkel met een moderne webdesign.
                  Hierbij kunt u rekenen op G.WebDev!
                  <div className={Style.content__text__line}></div>
                  <br />
                </div>
              </div>

              <div className={Style.home__content__main__box4}>
                <div className={Style.home__content__main__box__title}>
                  GO MOBILE
                  <div className={Style.content__line}></div>
                </div>

                <div className={Style.home__content__main__box__text}>
                  <div className={Style.content__text__line}></div>
                  <br />
                  Met een gepersonaliseerde mobiele applicatie vestig je je als een moderne business waar de smartphone niet meer uit weg te denken is.
                  Geen nood meer om voor elke taak naar je laptop te snellen dankzij de mobiele applicatie.
                  Overal en altijd bereikbaar: dat is het doel.
                  <div className={Style.content__text__line}></div>
                  <br />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div >
  );
};



export default Home;
