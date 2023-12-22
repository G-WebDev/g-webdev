import React, { useRef, useEffect } from "react";

// IMPORT INTERN STYLE
import Style from "./HomeBlocks.module.css";

const HomeBlocks = () => {
  const title1 = useRef(null);
  const title2 = useRef(null);
  const title3 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

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
          entry.target.classList.add(Style.title1__boxVisible);
          entry.target.classList.add(Style.title2__boxVisible);
          entry.target.classList.add(Style.title3__boxVisible);
          entry.target.classList.add(Style.text1__boxVisible);
          entry.target.classList.add(Style.text2__boxVisible);
          entry.target.classList.add(Style.text3__boxVisible);
        } else {
          entry.target.classList.remove(Style.title1__boxVisible);
          entry.target.classList.remove(Style.title2__boxVisible);
          entry.target.classList.remove(Style.title3__boxVisible);
          entry.target.classList.remove(Style.text1__boxVisible);
          entry.target.classList.remove(Style.text2__boxVisible);
          entry.target.classList.remove(Style.text3__boxVisible);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Use local variables to capture the current values of the refs
    const title1Ref = title1.current;
    const title2Ref = title2.current;
    const title3Ref = title3.current;
    const text1Ref = text1.current;
    const text2Ref = text2.current;
    const text3Ref = text3.current;

    // Start observing each target element
    if (title1Ref) observer.observe(title1Ref);
    if (title2Ref) observer.observe(title2Ref);
    if (title3Ref) observer.observe(title3Ref);
    if (text1Ref) observer.observe(text1Ref);
    if (text2Ref) observer.observe(text2Ref);
    if (text3Ref) observer.observe(text3Ref);

    // Clean up the observer when the component is unmounted
    return () => {
      if (title1Ref) observer.unobserve(title1Ref);
      if (title2Ref) observer.unobserve(title2Ref);
      if (title3Ref) observer.unobserve(title3Ref);
      if (text1Ref) observer.unobserve(text1Ref);
      if (text2Ref) observer.unobserve(text2Ref);
      if (text3Ref) observer.unobserve(text3Ref);
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className={Style.home__content__blocks}>
      <div className={Style.home__content__block1}>
        <div className={Style.home__content__block__title} ref={title1}>
          NEED A WEBSITE?
        </div>

        <div className={Style.home__content__block__text} ref={text1}>
          Looking for an experienced web developer in Ghent? G.WebDev is here to
          help you! With extensive knowledge and skills in web development,
          G.WebDev builds a powerful website for your company.
        </div>
      </div>

      <div className={Style.home__content__block2}>
        <div className={Style.home__content__block__title} ref={title2}>
          ABOUT G.WebDev.
        </div>

        <div className={Style.home__content__block__text} ref={text2}>
          I'm Gwen, the founder of G.WebDev. Here, it's not just about websites;
          it's about understanding your unique goals and crafting a digital
          space that resonates with your audience. Let's build more than a
          website; let's build your digital success story.
        </div>
      </div>

      <div className={Style.home__content__block3}>
        <div className={Style.home__content__block__title} ref={title3}>
          ON THE WEB?
        </div>

        <div className={Style.home__content__block__text} ref={text3}>
          Start digitizing your business today. Your online presence is
          indispensable.Therefore, take your place on the internet and reach
          more customers, because they search online.
        </div>
      </div>
    </div>
  );
};

export default HomeBlocks;
