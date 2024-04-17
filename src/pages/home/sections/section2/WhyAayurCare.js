import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector1.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
import styles from "./WhyAayurCare.module.css";
import { SectionContainerRight } from "../SectionContainer";

const WhyAayurCare = () => {
  return (
    <SectionContainerRight>
      <div className={styles.contentSubContainer}>
        <p className="title-home">
          Why <span className="text-blue">Aayur Care</span>?
        </p>
        <div className={styles.tableItems}>
          <span className={styles.rightElement}>
            <p className={styles.innerNumber}>1</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
          <span className={styles.leftElement}>
            <p className={styles.innerNumber}>2</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
          <span className={styles.rightElement}>
            <p className={styles.innerNumber}>3</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
          <span className={styles.leftElement}>
            <p className={styles.innerNumber}>4</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
          <span className={styles.rightElement}>
            <p className={styles.innerNumber}>5</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
          <span className={styles.leftElement}>
            <p className={styles.innerNumber}>6</p>
            <p className={styles.innerText}>
              Activate your health card within 48 hours to ensure you can
              quickly access the benefits it offers.
            </p>
          </span>
        </div>
      </div>
    </SectionContainerRight>
  );
};

export default WhyAayurCare;
