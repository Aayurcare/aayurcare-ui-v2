import React, { useEffect, useState } from "react";

import BackgroundVector from "../../../../assets/images/home/vector1.png";
import backgroundStyles from "./../BackgroundStyles.module.css";
import styles from "./VitalLinks.module.css";
import "@splidejs/react-splide/css";

//Images
import NACO from "../../../../assets/images/home/NACO.png";
import NHM from "../../../../assets/images/home/NationalHealthMission.png";
import WHO from "../../../../assets/images/home/WHO.svg";

import { SectionContainerRight } from "../SectionContainer";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const VitalLinks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 650);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 650);
    });
  }, []);
  return (
    <SectionContainerRight>
      <div className={styles.contentSubContainer}>
        <p className={styles.title}>
          Vital Links: Ensuring Your<br></br> Wellbeing is{" "}
          <span className="text-blue">Our Promise.</span>
        </p>
        {!isMobile ? <FullCardSection /> : <MobileCardSection />}
      </div>
    </SectionContainerRight>
  );
};

const FullCardSection = () => {
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
        image={WHO}
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

const MobileCardSection = () => {
  return (
    <div className={styles.cardSection}>
      <Splide>
        <SplideSlide>
          <CardItem
            image={NHM}
            title={"Blood Cell NHM"}
            description={
              "Your chance to be a hero. Discover the impact of giving blood and how you can save lives. Visit the website to find donation centers and get involved."
            }
          />
        </SplideSlide>
        <SplideSlide>
          {" "}
          <CardItem
            image={NHM}
            title={"The World Health Organization (WHO)"}
            description={
              "Leading global health initiatives. Dedicated to worldwide healthcare, disease prevention, and well-being. Visit the website for valuable insights and global health updates          "
            }
          />
        </SplideSlide>
        <SplideSlide>
          <CardItem
            image={NACO}
            title={"National AIDS Control Organization"}
            description={
              "Providing crucial information, medical aid, and emotional support to prevent transmission and improve the lives of those impacted. Visit the website for comprehensive resources and assistance."
            }
          />
        </SplideSlide>
      </Splide>
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
