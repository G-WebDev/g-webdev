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
              <strong>G.WebDev</strong> ontwerpt, bouwt, onderhoud en optimaliseerd dé website, webshop of webapplicatie die jouw
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
              WEB DEVELOPER IN GENT.
            </div>
            <div className={Style.home__content__block__text}>
              Op zoek naar een ervaren web developer in Gent? <strong>G.WebDev</strong> is hier om jou te helpen!
              Met uitgebreide kennis en vaardigheden in web development, bouwt <strong>G.WebDev</strong> een krachtige website voor jouw bedrijf.
            </div>
          </div>

          <div className={Style.home__content__block3}>
            <div className={Style.home__content__block__title}>
              OVER G.WebDev.
            </div>
            <div className={Style.home__content__block__text}>
              Op zoek naar een ervaren web developer in Gent? <strong>G.WebDev</strong> is hier om jou te helpen!
              Met uitgebreide kennis en vaardigheden in web development, bouwt <strong>G.WebDev</strong> een krachtige website voor jouw bedrijf.
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
                  Een aantrekkelijke website is de sleutel tot succes voor elk bedrijf.
                  <strong>G.WebDev</strong> weet als geen ander hoe een website te ontwerpen die klanten aantrekt én behoudt.
                  Met ervaring en passie voor webdesign levert <strong>G.WebDev</strong> een resultaat dat niet alleen mooi is om naar te kijken, maar ook de juiste informatie overbrengt en interactie creëert met je doelgroep.
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
                  Daar zet <strong>G.WebDev</strong> zich maar al te graag voor in!
                  <div className={Style.content__text__line}></div>
                </div>
              </div>
            </div>

            <div className={Style.home__content__main__box__col2}>
              <div className={Style.home__content__main__box3}>
                <div className={Style.home__content__main__box__title}>
                  E-COMMERCE
                  <div className={Style.content__line}></div>
                </div>

                <div className={Style.home__content__main__box__text}>
                  <div className={Style.content__text__line}></div>
                  <br />
                  De toekomst van retail is digitaal, en als bedrijf wil je daar natuurlijk niet bij achterblijven.
                  <strong>G.WebDev</strong> helpt je graag om jouw online shop op te zetten, zodat je meer klanten kunt bereiken en succesvol kunt groeien.
                  Met moderne webdesign en onze expertise op het gebied van e-commerce, ben je verzekerd van een webshop die helemaal past bij jouw bedrijf.
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

    </div>

  );
};



export default Home;
