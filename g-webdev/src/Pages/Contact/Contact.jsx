import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import Style from "./Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_64qt2qq",
        "template_age972r",
        form.current,
        "tRgxtAqd9SYNcmux3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setIsSuccess(true);

          //Reset the form after 2 seconds
          setTimeout(() => {
            setIsSuccess(false);
            form.current.reset();
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form className={Style.contact__form} ref={form} onSubmit={sendEmail}>
          <div className={Style.contact__form__input_wrapper}>
            <input
              className={Style.input}
              type="text"
              id="name"
              name="user_name"
              required
              autoComplete="off"
            />
            <label htmlFor="name">Your Name</label>
           
          </div>

          <div className={Style.contact__form__input_wrapper}>
            <input
              type="email"
              id="email"
              name="user_email"
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
            <button type="submit">
              <div className={Style.svg_wrapper}>
                <svg width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>

              <span>Send</span>
            </button>
          </div>
          {isSuccess ? (
            <div className={Style.successMessage}>
              <p>Your message has been sent successfully!</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
