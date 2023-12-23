import React from "react";

import Style from "./ServiceTop.module.css";

const servises = [
  {
    id: 1,
    title: "WEB DEVELOPMENT",
    description:
      "Development of user-friendly, mobile and tailor-made websites.",
  },
  {
    id: 2,
    title: "RESPONSIVE DESIGN",
    description:
      "Ensuring optimal display of your website on desktop, tablet and mobile.",
  },
  {
    id: 3,
    title: "E-COMMERCE",
    description:
      "Development of your online store, including payment and shipping options.",
  },
  {
    id: 4,
    title: "API INTEGRATION",
    description:
      "Integration of web apps and websites with external APIs and databases.",
  },
  {
    id: 5,
    title: "PERFORMANCE OPTIMIZATION",
    description:
      "Optimizing the performance of React applications, including fixing slowdowns and errors.",
  },
  {
    id: 6,
    title: "WEB HOSTING",
    description:
      "Care and maintenance of the server and hosting solution for React applications and websites.",
  },
  {
    id: 7,
    title: "SEO OPTIMIZATION",
    description:
      "Improve your website's visibility and search results in search engines.",
  },
];

const Diensten = () => {
  return (
    <div className={Style.servise__top__container}>
      {servises.map((dienst) => (
        <div className={Style.servise__top__services} key={dienst.id}>
          <h3 className={Style.servise__top__title}>{dienst.title}</h3>
          <p className={Style.servise__top__text}>{dienst.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Diensten;
