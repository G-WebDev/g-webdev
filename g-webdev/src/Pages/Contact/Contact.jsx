import React from "react";

import Style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={Style.contact}>
      <div className={Style.contact_container}>
        <div className={Style.contact_intro_box}>
          <div className={Style.contact_intro_title_box}>
            <div>
              If you are interested in working with me or have any questions, please don't hesitate to
              reach out. You can contact me via the following methods:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
