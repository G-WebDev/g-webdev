import React from "react";

import Style from './Diensten.module.css';

const diensten = [
  { id: 1, title: "Website ontwikkeling", description: "Ontwikkeling van gebruiksvriendelijke, mobiele en op maat gemaakte websites." },
  { id: 2, title: "Responsive design", description: "Zorgen voor een optimale weergave van uw website op desktop, tablet en mobiel." },
  { id: 3, title: "E-commerce ontwikkeling", description: "Ontwikkeling van uw online winkel, inclusief betalings- en verzendopties." },
  { id: 4, title: "Integratie met APIs", description: "Integratie van web app's en websites met externe APIs en databases." },
  { id: 5, title: "Performance optimization", description: "Optimalisatie van de prestaties van React-applicaties, waaronder het oplossen van vertragingen en fouten." },
  { id: 6, title: "Web hosting", description: "Verzorging en onderhoud van de server en hostingoplossing voor React-applicaties en websites." },
  { id: 7, title: "Search Engine Optimization (SEO)", description: "Verbeteren van de zichtbaarheid en zoekresultaten van uw website in zoekmachines." },
];

const Diensten = () => {
  return (
    <div className={Style.diensten__container}>
      {diensten.map((dienst) => (
        <div className={Style.dienst} key={dienst.id}>
          <h3 className={Style.dienst__title}>{dienst.title}</h3>
          <p className={Style.dienst__description}>{dienst.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Diensten;