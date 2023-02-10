import React from 'react';

import Style from './Projects.module.css';

const Projects = () => {
  return (
    <div className={Style.projects}>
    <div className={Style.projects_container}>
        <div className={Style.intro_box}>
            <div className={Style.intro_title_box}>
                <h1>Projects</h1>
            </div>
        </div>
    </div>
</div>
  )
}

export default Projects