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
            An attractive website that is both informative and interactive? With
            an experienced and passionate web design, we at{" "}
            <strong>G.WebDev</strong> deliver the best and most satisfying end
            result for every company. Radiate expertise and personality with a
            powerful web design. This way you are guaranteed to win customers.
            {/* Een aantrekkelijke website die zowel informatief als interactief is?
            Met ervaren en passioneel webdesign leveren wij bij
            <strong> G.WebDev</strong> voor elk bedrijf het beste en meest
            bevredigende eindresultaat. Straal expertise en persoonlijkheid uit
            met een krachtig webdesign. Zo win je gegarandeerd klanten. */}
            <div className={Style.content__text__line}></div>
          </div>
        </div>

        <div className={Style.home__content__main__box2}>
          <div className={Style.home__content__main__box__title}>
            SYSTEM MANAGEMENT
            <div className={Style.content__line}></div>
          </div>

          <div className={Style.home__content__main__box__text}>
            <div className={Style.content__text__line}></div>
            <br />
            Manage your customers and products with a simple and targeted
            system. This way you save time and money. A quick way to make your
            life a lot more pleasant and clearer. <strong> G.WebDev</strong> is
            more than happy to commit to this!
            {/* Beheer je klanten en producten met een eenvoudig en doelgericht
            systeem. Zo bespaar je tijd én geld: een snelle manier om je leven
            een pak aangenamer en overzichtelijker te maken. Daar zet
            <strong> G.WebDev</strong> zich maar al te graag voor in! */}
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
            Selling online is simply the 'hip' thing. Companies choose this to
            appeal to more customers. Start your online shop today and grow into
            a successful and global store. Expand your limits before it's late!
            Together we build your online store with a modern web design. You
            can count on G.WebDev for this!
            {/* Online verkopen is nu eenmaal de 'hipe'. Bedrijven kiezen hiervoor
            om meer klanten aan te spreken. Start vandaag met uw online shop en
            groei tot een succesvolle en globale winkel. Expand your limits
            before it's late! Samen bouwen we uw online winkel met een moderne
            webdesign. Hierbij kunt u rekenen op <strong>G.WebDev</strong>! */}
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
            With a personalized mobile application you establish yourself as a
            modern business where the smartphone is indispensable. No more need
            to rush to your laptop thanks to the mobile application. Available
            anywhere and anytime: that is the goal.
            {/* Met een gepersonaliseerde mobiele applicatie vestig je je als een
            moderne business waar de smartphone niet meer uit weg te denken is.
            Geen nood meer om naar je laptop te snellen dankzij de mobiele
            applicatie. Overal en altijd bereikbaar: dat is het doel. */}
            <div className={Style.content__text__line}></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
