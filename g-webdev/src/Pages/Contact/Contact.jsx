import React from "react";

import Style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={Style.contact__page__container}>
      <div className={Style.contact__intro__wrapper}>

        <div className={Style.contact__title__box}>
          <h1 className={Style.contact__intro__title}>Contact G.WebDev</h1>
        </div>

        <div className={Style.contact__text__box}>
          <p className={Style.contact__intro__text}>
            If you are interested in working with me or have any questions,
            please don't hesitate to reach out. You can contact me via the
            following methods:
          </p>
        </div>
      </div>

      <div className={Style.contact__form__box}>
        <form className={Style.contact__form}>
          <div className={Style.contact__form__input_wrapper}>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="off"
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className={Style.contact__form__input_wrapper}>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className={Style.contact__form__input_wrapper}>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              autoComplete="off"
            />
            <label htmlFor="message">Message</label>
          </div>

          <div className={Style.contact__form__btn__box}>
            <button>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
