import React, { useEffect, useState } from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import styles from "./CustomizeHealthPlan.module.css";
import backgroundStyles from "../BackgroundStyles.module.css";
import ButtonSecondary from "../../../../component/elements/button/ButtonSecondary";
import { SectionContainerLeft } from "../SectionContainer";
import useIsMobile from "../../../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

const CustomizeHealthPlan = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
    <div className={styles.contentSubContainer}>
      {isMobile && (
        <article className="title-home">
          Customize your perfect <span className="text-blue">health plan</span>{" "}
          with us!
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
            <span className="text-blue">Individual Plan</span>. Let us guide you
            towards peace and well-being.
          </p>
          <ButtonSecondary
            styles={{ alignSelf: "center" }}
            content={"Know More"}
            onClick={() => {
              navigate("/plans");
            }}
          />
        </article>

        <article className={styles.cardItem}>
          <p className={styles.cardTitle}>Maternally Plan</p>
          <p className={styles.cardDescription}>
            Introducing our Maternally Plan, designed to nurture expectant
            <span className="text-blue">&nbsp;mothers</span>. Let us through
            every stage of their journey towards motherhood.
          </p>
          <ButtonSecondary
            styles={{ alignSelf: "center" }}
            content={"Know More"}
            onClick={() => {
              navigate("/plans");
            }}
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
            onClick={() => {
              navigate("/plans");
            }}
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
            onClick={() => {
              navigate("/plans");
            }}
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
            onClick={() => {
              navigate("/plans");
            }}
          />
        </article>
      </div>
    </div>
  );
};

const CardItem = () => {
  const navigate = useNavigate();
  return (
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
        onClick={() => {
          navigate("/plans");
        }}
      />
    </article>
  );
};

export default CustomizeHealthPlan;
