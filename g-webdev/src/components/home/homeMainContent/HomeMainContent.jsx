import React from "react";

// IMPORT INTERN STYLE
import Style from "./HomeMainContent.module.css";

const HomeMainContent = () => {
  return (
    <div className={Style.home__content__main__box}>
      <div className={Style.home__content__main__img__box}></div>

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
            Met ervaren en passioneel webdesign leveren wij bij
            <strong> G.WebDev</strong> voor elk bedrijf het beste en meest
            bevredigende eindresultaat. Straal expertise en persoonlijkheid uit
            met een krachtig webdesign: zo win je gegarandeerd klanten.
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
            Beheer je klanten en producten met een eenvoudig en doelgericht
            systeem. Zo bespaar je tijd én geld: een snelle manier om je leven
            een pak aangenamer en overzichtelijker te maken. Daar zet
            <strong> G.WebDev</strong> zich maar al te graag voor in!
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
            Online verkopen is nu eenmaal de 'hipe'. Bedrijven kiezen hiervoor
            om meer klanten aan te spreken. Start vandaag met uw online shop en
            groei tot een succesvolle en globale winkel. Expand your limits
            before it's late! Samen bouwen we uw online winkel met een moderne
            webdesign. Hierbij kunt u rekenen op <strong>G.WebDev</strong>!
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
            Met een gepersonaliseerde mobiele applicatie vestig je je als een
            moderne business waar de smartphone niet meer uit weg te denken is.
            Geen nood meer om naar je laptop te snellen dankzij de mobiele
            applicatie. Overal en altijd bereikbaar: dat is het doel.
            <div className={Style.content__text__line}></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
