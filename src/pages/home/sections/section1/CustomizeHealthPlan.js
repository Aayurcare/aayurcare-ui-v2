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
        <article className={styles.textArticle}>
          Customize your perfect <span className="text-blue">health plan</span>{" "}
          with us!
        </article>
        <article className={styles.cardItem}>
          <p className={styles.cardTitle}>Individual Plan</p>
          <p>
            For those craving a stress-free life, we offer our specialized
            <span className="text-blue">&nbsp;Individual Plan</span>. Let us
            guide you towards peace and well-being.
          </p>
          <ButtonSecondary
            styles={{ alignSelf: "center" }}
            content={"Know More"}
          />
        </article>
        {!isMobile && (
          <>
            <article className={styles.cardItem}>
              <p className={styles.cardTitle}>Individual Plan</p>
              <p>
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
              <p className={styles.cardTitle}>Individual Plan</p>
              <p>
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
              <p className={styles.cardTitle}>Individual Plan</p>
              <p>
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
              <p className={styles.cardTitle}>Individual Plan</p>
              <p>
                For those craving a stress-free life, we offer our specialized
                <span className="text-blue">&nbsp;Individual Plan</span>. Let us
                guide you towards peace and well-being.
              </p>
              <ButtonSecondary
                styles={{ alignSelf: "center" }}
                content={"Know More"}
              />
            </article>
          </>
        )}
      </div>
    </SectionContainerLeft>
  );
};

const CardItem = () => {
  return <div></div>;
};

export default CustomizeHealthPlan;
