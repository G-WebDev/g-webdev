import React from "react";
import { Link } from "react-router-dom";

// IMPORT INTERN STYLE
import Style from "./Footer.module.css";

import images from '../../Assets/Images';

const Footer = () => {

    return (
        <div className={Style.footer}>
            <div className={Style.footer__container}>
                <div className={Style.footer__logo__box}>
                    <img src={images.Logo} alt="logo" width={200} />
                </div>

                <div className={Style.footer__gegevens__box}>
                    <p>GEGEVENS</p>
                    <ul className={Style.footer__gegevens__list}>
                        <li className={Style.footer__gegevens__list__item}><a href="mailto: g-webdev@outlook.com">g-webdev@outlook.com</a></li>
                        <li className={Style.footer__gegevens__list__item}><a href="tel: +32 470 38 49 95">+32 470 38 49 95</a></li>
                        <br />
                        <li className={Style.footer__gegevens__list__item}>Jozef Guislainstraat 39 <br /> 9000 Gent</li>

                        <li className={Style.footer__gegevens__list__item}>BTW BE123.456.789</li>
                        <br />
                        <li className={Style.footer__gegevens__list__item}>FBlogo / TwitLogo</li>
                    </ul>
                </div>

                <div className={Style.footer__paginas__box}>
                    <p>PAGINA'S</p>
                    <ul className={Style.footer__paginas__list}>
                        <li className={Style.footer__paginas__list__item}><Link to="/">Home</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/about">About Me</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/diensten">Diensten</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/projecten">Projecten</Link></li>
                        <li className={Style.footer__paginas__list__item}> <Link to="/contact">Contact</Link></li>
                    </ul>
                </div>


            </div>
            <div className={Style.footer__container}>

                <div className={Style.footer__disclaimer__box}>
                    © 2023 G.WebDev • Uw website laten maken aan een passionele webdesign bureau in Gent voor een krachtige website.
                </div>

                <div className={Style.footer__disclaimer__list__box}>
                    <ul className={Style.footer__disclaimer__list}>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#">DISCLAIMER</a></li>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#">PRIVACY</a></li>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#">SITEMAP</a></li>
                    </ul>
                </div>

                <div className={Style.footer__deel__box}>
                    <div className={Style.footer__deel__text}>DEEL: <a>FB</a> <a>Twit</a></div>

                </div>

            </div>
        </div>
    );
};

export default Footer;
