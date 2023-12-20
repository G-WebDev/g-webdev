import React from "react";

// IMPORT INTERN STYLE
import Style from "./HomeBlocks.module.css";

const HomeBlocks = () => {
  return (
    <div className={Style.home__content__blocks}>
      <div className={Style.home__content__block1}>
        <div className={Style.home__content__block__title}>NEED A WEBSITE?</div>

        <div className={Style.home__content__block__text}>
          Looking for an experienced web developer in Ghent? G.WebDev is here to
          help you! With extensive knowledge and skills in web development,
          G.WebDev builds a powerful website for your company.
          {/* Op zoek naar een
          ervaren web developer in Gent?
          <strong>G.WebDev</strong> is hier om jou te helpen! Met uitgebreide
          kennis en vaardigheden in web development, bouwt
          <strong>G.WebDev</strong> een krachtige website voor jouw bedrijf. */}
        </div>
      </div>

      <div className={Style.home__content__block2}>
        <div className={Style.home__content__block__title}>ABOUT G.WebDev.</div>

        <div className={Style.home__content__block__text}>
          I'm Gwen, the founder of G.WebDev. Here, it's not
          just about websites; it's about understanding your unique goals and
          crafting a digital space that resonates with your audience. Let's
          build more than a website; let's build your digital success story.
        </div>
      </div>

      <div className={Style.home__content__block3}>
        <div className={Style.home__content__block__title}>ON THE WEB?</div>

        <div className={Style.home__content__block__text}>
          Start digitizing your business today. Your online presence is
          indispensable.Therefore, take your place on the internet and reach
          more customers, because they search online.

          {/* Begin vandaag nog met het
          digitaliseren van je onderneming. Je online aanwezigheid is onmisbaar.
          Neem daarom plaats op het internet en bereik meer klanten, want zij
          zoeken online. */}
        </div>
      </div>
    </div>
  );
};

export default HomeBlocks;
