import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector1.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
import styles from "./WhyAayurCare.module.css";

const WhyAayurCare = () => {
  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVector}
        />
      </div>
      <div className={backgroundStyles.contentContainer}>
        <div className={styles.contentSubContainer}>
          <p className={styles.whyAayurTitle}>
            Why <span className="text-blue">Aayur Care</span>?
          </p>
          <table></table>
        </div>
      </div>
    </div>
  );
};

export default WhyAayurCare;
