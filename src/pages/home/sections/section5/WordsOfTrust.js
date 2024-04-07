import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import backgroundStyles from "./../BackgroundStyles.module.css";

import styles from "./WordsOfTrust.module.css";
import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";

const WordsOfTrust = () => {
  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVector}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>
        <div className={styles.contentSubContainer}></div>
      </div>
    </div>
  );
};

export default WordsOfTrust;
