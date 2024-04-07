import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector1.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
import styles from "./VitalLinks.module.css";

//Images
import NACO from "../../../../assets/images/home/NACO.png";
import NHM from "../../../../assets/images/home/NationalHealthMission.png";
import { SectionContainerRight } from "../SectionContainer";

const VitalLinks = () => {
  return (
    <SectionContainerRight>
      <div className={styles.contentSubContainer}>
        <p className={styles.title}>
          Vital Links: Ensuring Your<br></br> Wellbeing is{" "}
          <span className="text-blue">Our Promise.</span>
        </p>
        <CardSection />
      </div>
    </SectionContainerRight>
  );
};

const CardSection = () => {
  return (
    <div className={styles.cardSection}>
      <CardItem
        image={NHM}
        title={"Blood Cell NHM"}
        description={
          "Your chance to be a hero. Discover the impact of giving blood and how you can save lives. Visit the website to find donation centers and get involved."
        }
      />

      <CardItem
        image={NHM}
        title={"The World Health Organization (WHO)"}
        description={
          "Leading global health initiatives. Dedicated to worldwide healthcare, disease prevention, and well-being. Visit the website for valuable insights and global health updates          "
        }
      />
      <CardItem
        image={NACO}
        title={"National AIDS Control Organization"}
        description={
          "Providing crucial information, medical aid, and emotional support to prevent transmission and improve the lives of those impacted. Visit the website for comprehensive resources and assistance."
        }
      />
    </div>
  );
};

const CardItem = ({ image, title, description }) => {
  return (
    <section className={styles.cardItem + " glass-bg"}>
      <img src={image} alt="Icon" className={styles.cardImage} />
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default VitalLinks;
