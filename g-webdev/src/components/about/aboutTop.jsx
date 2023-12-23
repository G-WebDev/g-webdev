import Style from "./aboutTop.module.css";

const About = () => {
  return (
    <div className={Style.about__intro__container}>
      <div className={Style.about__intro__title__box}>
        <h1 className={Style.about__intro__title}>
          About Gwen - Founder of G.WebDev
        </h1>
      </div>

      <div className={Style.about__intro__text__box}>
        <p className={Style.about__intro__text}>
          Hello! I'm Gwen, the founder of G.WebDev, and I'm thrilled to share a
          bit about my journey with you.
        </p>

        <p className={Style.about__intro__text}>
          In a previous chapter of my life, I worked as a car mechanic, pouring
          my passion into fixing and fine-tuning engines. However, life took an
          unexpected turn when health reasons led me to make a significant
          decision. Faced with change, I turned to another passion that had
          always lingered in the background: coding and web development.
        </p>

        <p className={Style.about__intro__text}>
          Embarking on a new path, I enrolled in a web development course at
          BeCode, where I dove headfirst into the world of coding. The
          challenges were immense, but my determination and love for crafting
          digital experiences fueled my progress. With dedication and hard work,
          I proudly emerged as a junior web developer.
        </p>

        <p className={Style.about__intro__text}>
          Eager to apply my newfound skills, I embarked on an enriching journey
          as a junior .NET full stack developer during an internship. Here, I
          delved into the intricate world of building IT systems for diverse
          purposes. It was a period of intense learning and growth, where I
          honed my abilities to create robust, efficient, and purposeful digital
          solutions.
        </p>

        <p className={Style.about__intro__text}>
          Now, as the driving force behind G.WebDev, I bring a unique blend of
          hands-on experience from the world of mechanics and the technical
          expertise gained in the realm of web development. My mission is clear:
          to help businesses, whether small start-ups or large enterprises,
          elevate their online presence.
        </p>

        <p className={Style.about__intro__text}>
          Passionate about transforming ideas into innovative and user-friendly
          web designs, I am here to collaborate with you. Whether you're
          envisioning a new website or seeking to enhance your existing online
          platform, I am committed to helping you achieve your goals in this
          digital age.
        </p>

        <p className={Style.about__intro__text}>
          Let's connect and explore how we can bring your digital aspirations to
          life. Feel free to reach out for more information or to discuss how
          G.WebDev can contribute to the growth of your business online.
        </p>

        <p className={Style.about__intro__text}>
          Looking forward to the exciting possibilities ahead!
        </p>
        <br />
        <p className={Style.about__intro__text}>
          Warm regards, <br />
          Gwen
        </p>
      </div>
      <div className={Style.about__border__bottom}></div>
    </div>
  );
};

export default About;
