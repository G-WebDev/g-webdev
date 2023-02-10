import React from "react";

// IMPORT INTERN STYLE
import Style from "./Web3.module.css";

// import images from "../../Assets/Images";

const Web3 = () => {
  return (
    <div className={Style.web3}>
      <div className={Style.web3_container}>
        <div className={Style.whatIsWeb3_container}>
          <div className={Style.whatIsWeb3_title_box}>
            <h2>Wat is Web3?</h2>
            Web3, ook wel bekend als het gedecentraliseerde web of het blockchain web, verwijst naar het
            gebruik van blockchaintechnologie om gedecentraliseerde toepassingen (dApps) en
            gedecentraliseerde autonome organisaties (DAO's) te ontwikkelen. Deze dApps en DAO's zijn
            gebouwd op gedecentraliseerde netwerken zoals Ethereum, wat hen in staat stelt op een
            gedecentraliseerde manier te opereren zonder de noodzaak van een centrale autoriteit.
            Web3-technologie heeft het potentieel om industrieën zoals financiën, supply chain management
            en data privacy te revolutioneren door een veilige en transparante manier te bieden om waarde
            en informatie uit te wisselen. Het heeft het potentieel om nieuwe kansen te creëren en
            problemen op te lossen die eerder als onoplosbaar werden beschouwd.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3;
