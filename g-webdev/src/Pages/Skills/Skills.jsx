import React from "react";

import Style from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={Style.skills}>
      <div className={Style.skills_container}>
        <div className={Style.skills.intro_box}>
          <div className={Style.skills.intro_title_box}>
            <h1>Skills</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
