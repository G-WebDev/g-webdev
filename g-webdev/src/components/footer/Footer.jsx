import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


// IMPORT INTERN STYLE
import Style from "./Footer.module.css";

import images from '../../Assets/Images';

const Footer = () => {

    return (
        <div className={Style.footer}>
            <div className={Style.footer__container}>
                <div className={Style.footer__logo__box}>
                    <Link to="/" target="blank"> <img src={images.Logo} alt="logo" className={Style.footer__logo} /> </Link>
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
                        <li className={Style.footer__gegevens__list__item}>
                            <div className={Style.footer__paginas__list__item_socials}>
                                <a href="https://www.facebook.com/profile.php?id=100089783126960" target="blank">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="/" target="blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>

                        </li>
                    </ul>
                </div>

                <div className={Style.footer__paginas__box}>
                    <p>PAGINA'S</p>
                    <ul className={Style.footer__paginas__list}>
                        <li className={Style.footer__paginas__list__item}><Link to="/" target="blank">Home</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/about" target="blank">About Me</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/diensten" target="blank">Diensten</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/projecten" target="blank">Projecten</Link></li>
                        <li className={Style.footer__paginas__list__item}> <Link to="/contact" target="blank">Contact</Link></li>
                    </ul>
                </div>

                <div className={Style.footer__info__box}>
                    <div className={Style.info__title}>
                        <p>GEGEVENS</p>
                    </div>

                    <ul className={Style.footer__info__list}>
                        <li className={Style.footer__info__list__item}>BTW BE01.234.567.89</li>
                        <li className={Style.footer__info__list__item}><a href="mailto: g-webdev@outlook.com">g-webdev@outlook.com</a></li>
                        <li className={Style.footer__info__list__item}><a href="tel: +32 470 38 49 95">+32 470 38 49 95</a></li>
                        <li className={Style.footer__info__list__item}>Jozef Guislainstraat 39 <br /> 9000 Gent</li>
                        <br />
                    </ul>
                </div>

                <div className={Style.footer__paginas__box}>
                    <div className={Style.info__title}>
                        <p>PAGINA'S</p>
                    </div>

                    <ul className={Style.footer__paginas__list}>
                        <li className={Style.footer__paginas__list__item}><Link to="/" target="blank">Home</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/about" target="blank">About Me</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/diensten" target="blank">Diensten</Link></li>
                        <li className={Style.footer__paginas__list__item}><Link to="/projecten" target="blank">Projecten</Link></li>
                        <li className={Style.footer__paginas__list__item}> <Link to="/contact" target="blank">Contact</Link></li>
                    </ul>
                </div>

            </div>

            <div className={Style.footer__bottom}>
                <div className={Style.footer__share__box}>
                    <div className={Style.footer__share__text}>
                        <a href="https://www.facebook.com/profile.php?id=100089783126960" target="blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a href="/" target="blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                </div>

                <div className={Style.footer__disclaimer__box}>
                    <div className={Style.disclaimer__title}>
                        <p> © 2023 G.WebDev</p>
                    </div>
                    <div className={Style.disclaimer__text}>
                        <p> • Uw website laten maken door een passionele web developer in Gent om uw online aanwezigheid naar een hoger niveau te tillen.
                        </p>
                    </div>
                    <br />
                    <br />
                    <ul className={Style.footer__disclaimer__list}>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#" target="blank">° DISCLAIMER</a></li>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#" target="blank">° PRIVACY</a></li>
                        <li className={Style.footer__disclaimer__list__item}><a href="/#" target="blank">° SITEMAP</a></li>
                    </ul>

                </div>
            </div>

        </div>


    );
};

export default Footer;
