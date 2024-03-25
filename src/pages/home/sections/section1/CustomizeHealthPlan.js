import React from "react";
import BackgroundVector from "../../../../assets/images/home/vector2.png";
import styles from "./CustomizeHealthPlan.module.css";
import backgroundStyles from "../BackgroundStyles.module.css";
import ButtonSecondary from "../../../../component/elements/button/ButtonSecondary";

const CustomizeHealthPlan = () => {
  // const styles = {
  //   container: {
  //     height: "100vh",
  //     position: "relative",
  //   },
  // };

  return (
    <div className={backgroundStyles.section1Container}>
      <div>
        <img
          className={backgroundStyles.backgroundImage}
          src={BackgroundVector}
        />
      </div>
      <div
        className={backgroundStyles.contentContainer}
        style={{ alignItems: "center" }}
      >
        <div className={styles.contentSubContainer}>
          <article className={styles.textArticle}>
            Customize your perfect{" "}
            <span className="text-blue">health plan</span> with us!
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
        </div>
      </div>
    </div>
  );
};

const CardItem = () => {
  return <div></div>;
};

export default CustomizeHealthPlan;
