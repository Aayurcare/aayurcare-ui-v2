import { SectionContainerLeft } from "../../home/sections/SectionContainer";
import styles from "./IntroWelcomeSection.module.css";

const IntroWelcomeSection = () => {
  return (
    <div className={styles.introWelcomeContainer}>
      <p className={styles.introTitle + " title"}>
        Our health <span className="text-blue"> packages</span>
      </p>
      <p className={styles.introSubTitle}>Your path to vibrant Health</p>
      <p className={styles.introDescription}>
        At AAYUR CARE, we prioritize your well-being above all else. Our mission
        is to empower you to take control of your health and lead a fulfilling
        life. To facilitate this, we offer a range of meticulously crafted
        Health Packages that cater to various healthcare needs. Discover how our
        Health Packages can benefit you and your loved ones.
      </p>
      <p className={styles.introSecondTitle + " subTitle"}>
        Customize your perfect <span className="text-blue">health plan</span>{" "}
        with us!
      </p>
      <p className={styles.introSecondSubTitle}>
        ensuring success on your wellness journey!
      </p>
    </div>
  );
};

export default IntroWelcomeSection;
