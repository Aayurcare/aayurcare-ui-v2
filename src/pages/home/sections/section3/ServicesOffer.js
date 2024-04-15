import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import backgroundStyles from "./../BackgroundStyles.module.css";

import styles from "./ServicesOffer.module.css";
import ButtonPrimary from "../../../../component/elements/button/ButtonPrimary";
//Images imports
import Banner from "../../../../assets/images/home/Group asset grid.png";
import DoctorConsultImage from "../../../../assets/images/home/doctor_consult.png";
import DiagnosticImage from "../../../../assets/images/home/diagnostic.png";
import OnlineMedicineImage from "../../../../assets/images/home/online_medicine.png";
import {
  SectionContainerLeft,
  SectionContainerRight,
} from "../SectionContainer";

const ServicesOffer = () => {
  return (
    <SectionContainerLeft>
      <div className={styles.contentSubContainer}>
        <img src={Banner} className={styles.topBannerImage} />
        <p className={styles.title}>
          We offer a range of <span className="text-blue">services</span>
        </p>
        <CardSection />
      </div>
    </SectionContainerLeft>
  );
};

const CardSection = () => {
  return (
    <div className={styles.cardContainer}>
      <ServicesCard
        image={DoctorConsultImage}
        title={"Doctor Consultation"}
        description={
          "We offer affordable online doctor consultations to our customers."
        }
      />
      <ServicesCard
        image={DiagnosticImage}
        title={"Diagnostic"}
        description={
          "Easily accessible online platform for comprehensive doorstep full-body check-ups."
        }
      />
      <ServicesCard
        image={OnlineMedicineImage}
        title={"Online Medicine"}
        description={
          "Effortlessly receive medicine at your doorstep through our convenient online platform."
        }
      />
    </div>
  );
};

const ServicesCard = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src={image} />
        <p className={styles.cardTitle}>{title}</p>
        <div className={styles.cardGradient}></div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{description}</p>
        <ButtonPrimary content={"Know More"} />
      </div>
    </div>
  );
};

export { CardSection };

export default ServicesOffer;
