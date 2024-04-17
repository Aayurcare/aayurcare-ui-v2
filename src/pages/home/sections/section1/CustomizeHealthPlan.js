import React, { useEffect, useState } from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import styles from "./CustomizeHealthPlan.module.css";
import backgroundStyles from "../BackgroundStyles.module.css";
import ButtonSecondary from "../../../../component/elements/button/ButtonSecondary";
import { SectionContainerLeft } from "../SectionContainer";
import useIsMobile from "../../../../hooks/useIsMobile";

const CustomizeHealthPlan = () => {
  const isMobile = useIsMobile();

  return (
    <SectionContainerLeft>
      <div className={styles.contentSubContainer}>
        {isMobile && (
          <article className="title-home">
            Customize your perfect{" "}
            <span className="text-blue">health plan</span> with us!
          </article>
        )}
        <div className={styles.cardSection}>
          {!isMobile && (
            <article className="title-home">
              Customize your perfect{" "}
              <span className="text-blue">health plan</span> with us!
            </article>
          )}
          <article className={styles.cardItem}>
            <p className={styles.cardTitle}>Individual Plan</p>
            <p className={styles.cardDescription}>
              For those craving a stress-free life, we offer our specialized
              <span className="text-blue">&nbsp;Individual Plan</span>. Let us
              guide you towards peace and well-being.
            </p>
            <ButtonSecondary
              styles={{ alignSelf: "center" }}
              content={"Know More"}
            />
          </article>

          <article className={styles.cardItem}>
            <p className={styles.cardTitle}>Couples Plan</p>
            <p className={styles.cardDescription}>
              For happy couples embracing life, we present our
              <span className="text-blue">&nbsp;Couples Plan</span>. Let us
              support your well-being journey together.
            </p>
            <ButtonSecondary
              styles={{ alignSelf: "center" }}
              content={"Know More"}
            />
          </article>
          <article className={styles.cardItem}>
            <p className={styles.cardTitle}>Family 1 Plan</p>
            <p className={styles.cardDescription}>
              For families dedicated to health and happiness, our
              <span className="text-blue">&nbsp;Family Plan &nbsp;</span>is here
              to support you in building a healthier nation.
            </p>
            <ButtonSecondary
              styles={{ alignSelf: "center" }}
              content={"Know More"}
            />
          </article>
          <article className={styles.cardItem}>
            <p className={styles.cardTitle}>Family 2 Plan</p>
            <p className={styles.cardDescription}>
              For families committed to well-being and joy, our
              <span className="text-blue">&nbsp;Family 2 Plan</span>&nbsp;offers
              tailored support in nurturing a healthier community.
            </p>
            <ButtonSecondary
              styles={{ alignSelf: "center" }}
              content={"Know More"}
            />
          </article>
          <article className={styles.cardItem}>
            <p className={styles.cardTitle}>Senior Citizen Plan</p>
            <p className={styles.cardDescription}>
              For senior citizens seeking a peaceful second chapter, our{" "}
              <span className="text-blue">&nbsp;Senior Citizen Plan&nbsp;</span>
              is designed to support their well-being.
            </p>
            <ButtonSecondary
              styles={{ alignSelf: "center" }}
              content={"Know More"}
            />
          </article>
        </div>
      </div>
    </SectionContainerLeft>
  );
};

const CardItem = () => {
  return <div></div>;
};

export default CustomizeHealthPlan;
