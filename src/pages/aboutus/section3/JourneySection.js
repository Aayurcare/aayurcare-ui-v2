import React from "react";
import { SectionContainerLeft } from "../../home/sections/SectionContainer";
import styles from "./JourneySection.module.css";
import Background from "../../../assets/images/aboutus/buildings_bg.png";

import Empathy from "../../../assets/images/aboutus/features/bipolar 2.svg";
import Innovation from "../../../assets/images/aboutus/features/idea 2.svg";
import Integrity from "../../../assets/images/aboutus/features/integration (1) 2.svg";
import Collaboration from "../../../assets/images/aboutus/features/integration 2.svg";
import Excellence from "../../../assets/images/aboutus/features/achievements 2.svg";
import Accessiblity from "../../../assets/images/aboutus/features/access-control 2.svg";

const JourneySection = () => {
  return (
    <SectionContainerLeft>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          width: "85%",
          textAlign: "center",
        }}
        className={styles.journeySection}
      >
        <div className={styles.buildingContainer}>
          <img
            src={Background}
            alt="Building"
            style={{ width: "100%", height: "100%" }}
          />
          <div className={styles.buildingCenteredText}>
            Join our journey to make health accessible for all through
            technology.
          </div>
        </div>
        <FeatureCards />

        <p className={styles.subTitle}>Vision</p>
        <p className={styles.textContent}>
          To be the leading provider of innovative and efficient reimbursement
          solutions, ensuring seamless financial processes for healthcare
          providers and patients. Our vision is to emerge as the foremost
          provider of pioneering and streamlined reimbursement solutions within
          the healthcare industry. We are committed to revolutionizing financial
          processes for healthcare providers and patients alike, ensuring a
          seamless experience that optimizes efficiency, transparency and
          accessibility. By continually innovating and leveraging cutting-edge
          technologies, we aim to set the standard for excellence in
          reimbursement services, empowering our clients to focus on delivering
          high-quality care while we handle their financial needs with precision
          and dedication.
        </p>
        <p className={styles.subTitle}>Mission</p>
        <p className={styles.textContent}>
          Our mission is to revolutionize the healthcare industry by simplifying
          and optimizing the reimbursement process, ultimately driving increased
          revenue for healthcare providers while simultaneously enhancing access
          to superior quality care for patients. Through our extensive range of
          services, meticulously designed and executed, we pledge to elevate
          operational efficiency and financial performance for our clients. At
          the heart of our endeavor lies an unwavering dedication to excellence,
          ensuring unparalleled customer satisfaction and fostering enduring
          partnerships built on trust, reliability, and innovation.
        </p>
      </div>
    </SectionContainerLeft>
  );
};

const FeatureCards = () => {
  return (
    <section className={styles.featureSection}>
      <FeatureCard
        img={Empathy}
        title={"Empathy"}
        description={
          "Understanding another's feelings as if they were your own"
        }
      />
      <FeatureCard
        img={Innovation}
        title={"Innovation"}
        description={"Pioneering new paths with creativity and vision."}
      />
      <FeatureCard
        img={Integrity}
        title={"Integrity"}
        description={"Consistently choosing honesty and honor in every action."}
      />
      <FeatureCard
        img={Collaboration}
        title={"Collaboration"}
        description={
          "Leveraging collective expertise to achieve collective goals."
        }
      />
      <FeatureCard
        img={Excellence}
        title={"Excellence"}
        description={"Pursuing perfection with relentless dedication."}
      />
      <FeatureCard
        img={Accessiblity}
        title={"Accessiblity"}
        description={"Opening doors to inclusivity and opportunity for all."}
      />
    </section>
  );
};

const FeatureCard = ({ img, title, description }) => {
  return (
    <section className={styles.featureCard + " glass-bg"}>
      <img className={styles.featureIcon} src={img} alt={title} />
      <p className={styles.featureTitle}>{title}</p>
      <p className={styles.featureSubtitle}>{description}</p>
    </section>
  );
};

export default JourneySection;
