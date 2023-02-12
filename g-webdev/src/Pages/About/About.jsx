import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./About.module.css";

// import images from "../../Assets/Images";

const Web3 = () => {
  return (
    <div className={Style.about}>
      <div className={Style.about__container}>
        <div className={Style.intro__box}>
          <div className={Style.intro__text}>
            <div className={Style.intro__welcome__box}>
              Welkom bij <h1 className={Style.title__name__gwebdev}>G.WebDev</h1>
              <br />
              <div className={Style.slogan}>Uw betrouwbare partner in webontwikkeling.</div>
            </div>

            {/* <div className={Style.home__banner}> */}

            <div className={Style.intro_box}>
              <div className={Style.intro__text}>
                Mijn naam is <h1 className={Style.title__name}>Gwen</h1>,
                <br />
                ik ben een professionele web developer met ervaring in het creëren van functionele en
                mooie websites.
                <br />
                <br />
                Of u nu een kleine start-up of een grote onderneming bent, ik ben hier om uw online
                aanwezigheid naar een hoger niveau te tillen.
                <br />
                <br />
                Van het ontwerpen van een nieuwe website tot het onderhouden van uw bestaande website, ik
                ben gedreven om u te helpen uw online doelen te bereiken.
                <br />
                <br />
                Ik breng uw ideeën tot leven door middel van innovatieve en gebruiksvriendelijke
                webontwerpen.
                <div className={Style.contact__me}>
                  Neem{" "}
                  <Link to="/contact" className={Style.contact__link}>
                    contact
                  </Link>{" "}
                  op voor meer informatie of om te bespreken hoe ik uw bedrijf online kan helpen groeien
                  in een digitaal tijdperk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3;
