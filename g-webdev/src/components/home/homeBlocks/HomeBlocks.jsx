import React from "react";

// IMPORT INTERN STYLE
import Style from "./HomeBlocks.module.css";

const HomeBlocks = () => {
  return (
    <div className={Style.home__content__box}>
      <div className={Style.home__content__blocks}>
        <div className={Style.home__content__block1}>
          <div className={Style.home__content__block__title}>
            WEBSITE NODIG?
          </div>
          <div className={Style.home__content__block1}>
            <div className={Style.home__content__block__title}>
              WEB DEVELOPER IN GENT.
            </div>
            <div className={Style.home__content__block__text}>
              Op zoek naar een ervaren web developer in Gent?{" "}
              <strong>G.WebDev</strong> is hier om jou te helpen! Met
              uitgebreide kennis en vaardigheden in web development, bouwt{" "}
              <strong>G.WebDev</strong> een krachtige website voor jouw bedrijf.
            </div>
          </div>
        </div>

        <div className={Style.home__content__block2}>
          <div className={Style.home__content__block__title}>
            OVER G.WebDev.
          </div>
          <div className={Style.home__content__block2}>
            <div className={Style.home__content__block__title}>
              WEB DEVELOPER IN GENT.
            </div>
            <div className={Style.home__content__block__text}>
              Seeking a web developer in Gent? Look no further! I'm{" "}
              <strong>G.WebDev</strong>, the founder of G.WebDev. Here, it's not
              just about websites; it's about understanding your unique goals
              and crafting a digital space that resonates with your audience.
              Let's build more than a website; let's build your digital success
              story.
            </div>
          </div>
        </div>

        <div className={Style.home__content__block3}>
          <div className={Style.home__content__block__title}>
            WEB DEVELOPER IN GENT.
          </div>
          <div className={Style.home__content__block3}>
            <div className={Style.home__content__block__title}>
              WEB DEVELOPER IN GENT.
            </div>
            <div className={Style.home__content__block__text}>
              Begin vandaag nog met het digitaliseren van je onderneming. Je
              online aanwezigheid is onmisbaar. Neem daarom plaats op het
              internet en bereik meer klanten, want zij zoeken online.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlocks;
