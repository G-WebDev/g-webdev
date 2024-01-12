import React, { useRef, useEffect } from "react";
// import Typed from "typed.js";

// IMPORT INTERN STYLE
import Style from "./HomeIntro.module.css";

import images from "../../../Assets/Images";

const HomeIntro = () => {
  const intro = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is intersecting with the viewport, add a class to show it
          intro.current.classList.add(Style.home__intro__title__boxVisible);
        } else {
          // If not, remove the class
          intro.current.classList.remove(Style.home__intro__title__boxVisible);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target element
    observer.observe(intro.current);

    // Clean up the observer when the component is unmounted
    return () => observer.disconnect();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className={Style.home__intro__container}>
      <div className={Style.home__intro__text__img__wrapper}>
        <div className={Style.home__intro__text__box}>

          <h1 className={Style.home__intro__title} ref={intro}>
            Welcome!
          </h1>
          <h1 className={Style.home__intro__title_2} ref={intro}>
            I'm Gwen, 
          </h1>
          <p className={Style.home__intro__text}>
          the visionary behind G.WebDev.
          </p>

          <p className={Style.home__intro__text}>
            With a passion for excellence, I specialize in developing
            sophisticated and functional websites, webshops, and web
            applications.
          </p>

          <p className={Style.home__intro__text}>
            Whether you seek a captivating website or require the expertise of a
            seasoned web developer in Gent, your search concludes here.
          </p>

          <p className={Style.home__intro__text}>
            Let's elevate your online presence. Partner with G.WebDev to
            transform your digital vision into a compelling reality through
            innovative web solutions.
          </p>
        </div>

        <div className={Style.home__intro__image__box}>
          <img
            src={images.HomeBg}
            alt="laptop"
            className={Style.home__laptop}
          />
        </div>

        <p className={Style.home__intro__image__text} >
            Elevate your online presence with G.WebDev!
          </p>
      </div>
    </div>
  );
};

export default HomeIntro;
