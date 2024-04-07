import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
const ServicesOffer = () => {
  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVector}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>
        inside why ServicesOffer
      </div>
    </div>
  );
};

export default ServicesOffer;
