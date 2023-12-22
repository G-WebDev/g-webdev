import React, { useRef, useEffect } from "react";

// IMPORT INTERN STYLE
import Style from "./HomeMainContent.module.css";

const HomeMainContent = () => {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const line6 = useRef(null);
  const line7 = useRef(null);
  const line8 = useRef(null);

  // Add more refs for additional divs as needed

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(Style.content__text__line1__visible);
          entry.target.classList.add(Style.content__text__line2__visible);
          entry.target.classList.add(Style.content__text__line3__visible);
          entry.target.classList.add(Style.content__text__line4__visible);
          entry.target.classList.add(Style.content__text__line5__visible);
          entry.target.classList.add(Style.content__text__line6__visible);
          entry.target.classList.add(Style.content__text__line7__visible);
          entry.target.classList.add(Style.content__text__line8__visible);
        } else {
          entry.target.classList.remove(Style.content__text__line1__visible);
          entry.target.classList.remove(Style.content__text__line2__visible);
          entry.target.classList.remove(Style.content__text__line3__visible);
          entry.target.classList.remove(Style.content__text__line4__visible);
          entry.target.classList.remove(Style.content__text__line5__visible);
          entry.target.classList.remove(Style.content__text__line6__visible);
          entry.target.classList.remove(Style.content__text__line7__visible);
          entry.target.classList.remove(Style.content__text__line8__visible);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Use local variables to capture the current values of the refs
    const lineRef = line1.current;
    const line2Ref = line2.current;
    const line3Ref = line3.current;
    const line4Ref = line4.current;
    const line5Ref = line5.current;
    const line6Ref = line6.current;
    const line7Ref = line7.current;
    const line8Ref = line8.current;

    // Start observing each target element
    if (lineRef) observer.observe(lineRef);
    if (line2Ref) observer.observe(line2Ref);
    if (line3Ref) observer.observe(line3Ref);
    if (line4Ref) observer.observe(line4Ref);
    if (line5Ref) observer.observe(line5Ref);
    if (line6Ref) observer.observe(line6Ref);
    if (line7Ref) observer.observe(line7Ref);
    if (line8Ref) observer.observe(line8Ref);

    // Clean up the observer when the component is unmounted
    return () => {
      if (lineRef) observer.unobserve(lineRef);
      if (line2Ref) observer.unobserve(line2Ref);
      if (line3Ref) observer.unobserve(line3Ref);
      if (line4Ref) observer.unobserve(line4Ref);
      if (line5Ref) observer.unobserve(line5Ref);
      if (line6Ref) observer.unobserve(line6Ref);
      if (line7Ref) observer.unobserve(line7Ref);
      if (line8Ref) observer.unobserve(line8Ref);
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className={Style.home__content__main__box}>
      <div className={Style.home__content__main__img__box}></div>

      <div className={Style.home__content__main__box__container}>
        <div className={Style.home__content__main__box1}>
          <div className={Style.home__content__main__box__title}>
            WEBDESIGN
            <div className={Style.content__title__line}></div>
          </div>

          <div className={Style.home__content__main__box__text}>
            <div className={Style.content__text__line__top} ref={line1}></div>
            <br />
            An attractive website that is both informative and interactive? With
            an experienced and passionate web design, we at
            <strong> G.WebDev</strong> deliver the best and most satisfying end
            result for every company. Radiate expertise and personality with a
            powerful web design. This way you are guaranteed to win customers.
            <div
              className={Style.content__text__line__bottom}
              ref={line2}
            ></div>
          </div>
        </div>

        <div className={Style.home__content__main__box2}>
          <div className={Style.home__content__main__box__title}>
            SYSTEM MANAGEMENT
            <div className={Style.content__title__line}></div>
          </div>

          <div className={Style.home__content__main__box__text}>
            <div className={Style.content__text__line__top} ref={line3}></div>
            <br />
            Manage your customers and products with a simple and targeted
            system. This way you save time and money. A quick way to make your
            life a lot more pleasant and clearer. <strong> G.WebDev</strong> is
            more than happy to commit to this!
            <div
              className={Style.content__text__line__bottom}
              ref={line4}
            ></div>
          </div>
        </div>

        <div className={Style.home__content__main__box3}>
          <div className={Style.home__content__main__box__title}>
            WEBSHOP
            <div className={Style.content__title__line}></div>
          </div>

          <div className={Style.home__content__main__box__text}>
            <div className={Style.content__text__line__top} ref={line5}></div>
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
            <div
              className={Style.content__text__line__bottom}
              ref={line6}
            ></div>
            <br />
          </div>
        </div>

        <div className={Style.home__content__main__box4}>
          <div className={Style.home__content__main__box__title}>
            GO MOBILE
            <div className={Style.content__title__line}></div>
          </div>

          <div className={Style.home__content__main__box__text}>
            <div className={Style.content__text__line__top} ref={line7}></div>
            <br />
            With a personalized mobile application you establish yourself as a
            modern business where the smartphone is indispensable. No more need
            to rush to your laptop thanks to the mobile application. Available
            anywhere and anytime: that is the goal.
            <div
              className={Style.content__text__line__bottom}
              ref={line8}
            ></div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
